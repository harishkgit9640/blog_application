import React from 'react'
import './login.css';

const Login = () => {
    return (
        <div className='login'>
            <span className="loginTitle">Log In</span>
            <form action="" className="loginForm">
                <input type="text" className='loginInput' placeholder='Enter your Email..' />
                <input type="password" className='loginInput' placeholder='Enter your Password..' />
                <button className="loginButton">Log In</button>
                <button className="loginRegister">Register</button>
            </form>
        </div>
    )
}

export default Login
