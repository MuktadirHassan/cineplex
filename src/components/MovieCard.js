import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function MovieCard({ movie }) {
    let [data, setData] = useState({})
    let history = useHistory();

    const handleDateChange = e => {
        let date = e.target.value;
        setData({ data, date })
    };
    const handleTimeChange = e => {
        let time = e.target.value;
        setData({ data, time })
        history.push(`/${movie.id}/${data.date}/${time}`)
    };
    

    return (
        <div className='mb-6 overflow-hidden transition rounded-lg shadow-xl w-80 hover:shadow-2xl'>
            <div className=''>
                <div className="relative bg-red-500 pb-80">
                    <img src={movie.posterurl} alt={movie.title} className='absolute object-cover w-full h-full' />
                </div>
                <div className="flex flex-col justify-center">
                    <div className='px-6 py-4 text-sm'>
                        <h1 className='mb-2 text-xl font-semibold text-gray-800'>{movie.title}</h1>
                        <h2 className='mb-2 text-gray-500'>{movie.year}</h2>
                        <p className='mb-2 text-gray-500 truncate'>Synopsis: {movie.storyline}</p>
                        <div className='flex items-end h-16'>
                            <label className="w-2/3">
                                <span className="text-gray-700">Select date</span>
                                <input className="block w-full mt-1 form-input" type='date' onChange={e => handleDateChange(e)} required/>
                            </label>

                            <label className="block mt-4">
                                <span className="text-gray-700">Select Time</span>
                                {data.date ? <select className="block w-full mt-1 form-select" onChange={e => handleTimeChange(e)}>
                                    <option value='10:00 AM'>10:00 AM</option>
                                    <option value='03:00 PM'>03:00 PM</option>
                                    <option value='06:00 PM'>06:00 PM</option>
                                    <option value='12:00 AM'>12:00 AM</option>
                                </select> : null}
                                
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
