import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Sit from './Sit'


// Generating sits
const box = []
for (let i = 0; i < 40; i++) {
    box.push({ available: true, sit: i + 1 })
}
export default function Sits({ submitBooking, selectedSits, setSelectedSits }) {
    let { id } = useParams();
    const [checkAvailable, setCheckAvailable] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/bookings/${id}`)
            .then(res => res.json())
            .then(data => setCheckAvailable(data))
            .catch(err => console.log(err))
    }, [])

    const [occupied, setOccupied] = useState([])
    useEffect(() => {
        const sits = checkAvailable.map(el => el.sits)
        const flat = sits.flat(1)
        const sit = flat.map(el => el.sit)
        setOccupied(sit);
        console.log(sit);
    }, [checkAvailable])


    const [bookCount, setBookCount] = useState(0)


    const handleSits = (e) => {
        const sitNum = parseInt(e.target.innerText);
        const sit = box.filter(el => el.sit === sitNum && el.available === true)
        if (bookCount < 10) {
            const newSits = [...selectedSits, ...sit]
            setSelectedSits(newSits)
        }
        setBookCount(bookCount + 1)
    }
    const handleSitsRemove = e => {
        const sitNum = parseInt(e.target.innerText);
        const sit = selectedSits.filter(el => el.sit !== sitNum && el.available === true)
        const newSits = [...sit]
        setSelectedSits(newSits)
        setBookCount(bookCount - 1)
    }

    return (
        <>
            <div className='py-3'>
                <p>Selected Sits: {bookCount}</p>
            </div>
            <div className='grid grid-cols-10 gap-4'>
                {
                    box.map((sit, index) => <Sit available={occupied.includes(parseInt(sit.sit)) ? false : true} bookCount={bookCount} sitNum={sit.sit} key={index} handleSits={e => handleSits(e)} handleSitsRemove={e => handleSitsRemove(e)}></Sit>)
                }
            </div>
            <button onClick={submitBooking} className='px-20 py-4 my-6 transition rounded-full shadow hover:bg-gray-900 hover:text-white focus:outline-none hover:shadow-lg'>Book</button>
        </>
    )
}
