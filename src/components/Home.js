import React, { useState } from 'react'
import MovieCard from './MovieCard'
import moviesData from '../MovieData'
export default function Home() {
    const [movieData] = useState(moviesData)
    return (
        <div className='flex flex-wrap justify-around'>
            {
                movieData.map(movie => <MovieCard movie={movie} key={movie.id}></MovieCard>)
            }
        </div>
    )
}
