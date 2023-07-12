import React from 'react'
import './register.css';

const Register = () => {
    return (
        <div className='register'>
            <span className="registerTitle">Sign Up</span>
            <form action="" className="registerForm">
                <input type="text" className='registerInput' placeholder='HARISH KUMAR' />
                <input type="email" className='registerInput' placeholder='harishkumar@gmail.com' />
                <input type="password" className='registerInput' placeholder='**************' />
                <button className="registerRegister">Register</button>
                <button className="registerButton">Log In</button>
            </form>
        </div>
    )
}

export default Register
