import React from 'react'

// logo
import logo from '../assets/logo.svg'

const LoginPage = () => {
    return (
        <div className='flex bg-zinc-800 h-screen w-screen justify-center items-center'>
            <div className='flex flex-col bg-zinc-900 pt-10 items-center w-2/5 h-4/6 gap-6 rounded-lg p-6 py-8'>
                <div className='w-1/2 h-36'>
                    <img
                        src={logo}
                        alt='logo'
                        className='w-full h-full'
                    />
                </div>
                <input type='text' name='username' placeholder='Username' className='rounded-md p-2 w-1/2' />
                <input type='password' name='password' placeholder='Password' className='rounded-md p-2 w-1/2' />
                <button
                    className='rounded-md p-2 w-1/2 bg-lime-600'
                >
                    Login
                </button>

                <p className='underline text-slate-400'>Forgot your password?</p>
            </div>
        </div>
    )
}

export default LoginPage