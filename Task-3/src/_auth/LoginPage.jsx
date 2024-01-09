import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

// logo
import logo from '../assets/logo.svg'

const LoginPage = () => {
    const usernameRef = useRef()
    const passwordRef = useRef()

    const navigate = useNavigate()

    const validateEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const validatePassword = (password) => {
        // Regular expression for password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*@)(?!.*[^A-Za-z0-9@]).{8,}$/;
        return passwordRegex.test(password);
    }

    const handleSubmit = () => {
        const password = passwordRef.current.value

        if (password === "SmartServTest@123"){
            navigate('/dashboard')
            return
        }

        const username = usernameRef.current.value

        const validUsername = validateEmail(username)
        const validPassword = validatePassword(password)

        if (validUsername && validPassword)
            alert("Login Successful")
        else
            alert(
                "Invalid Credentials\n\nPassword must contain:\n1. At least 1 uppercase letter\n3. At least 1 digit\n4. No special characters allowed except '@'\n\nUsername must be a valid email address"
            )
    }

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
                <input
                    type='email'
                    name='username'
                    placeholder='Username'
                    ref={usernameRef}
                    className='rounded-md p-2 w-1/2'
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    ref={passwordRef}
                    className='rounded-md p-2 w-1/2'
                />
                <button
                    onClick={handleSubmit}
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