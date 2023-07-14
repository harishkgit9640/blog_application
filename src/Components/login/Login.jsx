import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';
import { axios } from 'axios';
const Login = () => {
    axios.get('https://localhost:5000/api/register').then((res) => { console.log(res); });

    return (
        <div className='login'>
            <span className="loginTitle">Log In</span>
            <form action="" className="loginForm">
                <input type="text" className='loginInput' placeholder='Enter your Email..' />
                <input type="password" className='loginInput' placeholder='Enter your Password..' />
                <Link to='/login' className="loginBtn ">Log In</Link >
                <Link to='/register' className="registerBtn">Register</Link >
            </form>
        </div>
    )
}

export default Login
