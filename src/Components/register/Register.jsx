import React from 'react'
import './register.css';
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='register'>
            <span className="registerTitle">Sign Up</span>
            <form action="" className="registerForm">
                <input type="text" className='registerInput' placeholder='HARISH KUMAR' />
                <input type="email" className='registerInput' placeholder='harishkumar@gmail.com' />
                <input type="password" className='registerInput' placeholder='**************' />
                <Link to='/register' className="registerBtn">Register</Link>
                <Link to='/login' className="loginBtn">Log In</Link>
            </form>
        </div>
    )
}

export default Register
