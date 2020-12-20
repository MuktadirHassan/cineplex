import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './Auth'

export default function Navbar() {
    const currentUser = useAuth()
    return (

        <nav className='py-3 mb-3 shadow'>
            <ul className='flex items-center justify-center text-lg text-gray-500'>
                <li className='mx-2 hover:text-gray-700'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='mx-2 hover:text-gray-700'>
                    <Link to='/login'>Login</Link>
                </li>
                <li className='mx-2 hover:text-gray-700'>
                    <Link to='/booking'>Booking</Link>
                </li>
                {
                    currentUser && <li className='mx-2 hover:text-gray-700'>
                    <Link to='/'>
                        <img src={currentUser.photoURL} className='w-10 h-10 rounded-full' alt=""/>
                    </Link>
                </li>
                }
                
            </ul>
        </nav>

    )
}
