import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moviesData from '../MovieData'
import { useAuth } from './Auth';
import Sits from './Sits';
export default function Booking() {
    let { id, date, time } = useParams();
    const [movieData] = useState(moviesData)
    const [movie, setMovie] = useState(null);
    const [selectedSits, setSelectedSits] = useState([])
    const currentUser = useAuth();


    useEffect(() => {
        const selectedMovie = movieData.filter(el => id.toString() === el.id.toString())
        setMovie(selectedMovie[0])
    }, [movieData, id])

    const submitBooking = () => {
        const bookingDetails = {
            movieTitle: movie.title,
            date: date,
            time: time,
            movieId: movie.id,
            sits: selectedSits,
            currentUser: currentUser.email
        }
        const bookingDetailsJson = JSON.stringify(bookingDetails)
        fetch('http://localhost:8080/bookings',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'authToken': sessionStorage.getItem('authToken'),
            },
            body: bookingDetailsJson
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
        console.log(bookingDetailsJson)
    }

    return (
        <div>
            <div className='grid grid-cols-12 gap-8'>
                <div className="col-span-6">
                    {
                        movie ? (
                            <>
                                <div className="relative overflow-hidden bg-red-100 rounded-lg pb-96">
                                    <img src={movie.posterurl} className='absolute object-cover w-full h-full' alt="" />
                                </div>
                                <h1 className='mt-3 mb-2 text-3xl'>{movie.title} - ({movie.year})</h1>
                                <p className='text-gray-500 text-md'>{movie.storyline}</p>
                            </>
                        ) : null
                    }

                </div>
                <div className="col-span-6">
                    <div className='mb-3 text-2xl'>
                        <p>Date: {date}</p> <p>Time: {time}</p>
                    </div>
                    <div>

                        <Sits submitBooking={submitBooking} selectedSits={selectedSits} setSelectedSits={setSelectedSits}></Sits>
                    </div>
                </div>
            </div>


        </div>
    )
}
