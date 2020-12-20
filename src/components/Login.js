import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from './Auth';
import { auth, googleProvider } from './firebaseInit';

export default function Login() {
    // Redirect if user alreay logged in
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from:{pathname:'/'}};
    const currentUser = useAuth();
    useEffect(() => {
        if(currentUser) {
            history.replace(from);
        }
    }, [currentUser])
    
    
    const handleGoogleLogin = async () => {
        try {
            const result = await auth.signInWithPopup(googleProvider)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='flex items-center justify-center h-screen -mt-10'>
            <button className='px-6 py-4 transition rounded-full shadow hover:bg-gray-100 hover:shadow-lg focus:outline-none' onClick={handleGoogleLogin}>Sing In with Google</button>
        </div>
    )
}
