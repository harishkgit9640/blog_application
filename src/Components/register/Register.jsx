import React, { useState } from 'react'
import './register.css';
import { Link } from 'react-router-dom'

const Register = () => {

    const [data, setData] = useState({
        name: "", email: "", password: ""
    });

    const inputHandle = (e) => {
        // const {name,value} = e.target.value;
        setData(e.target.value);
    }

    return (
        <div className='register'>
            <span className="registerTitle">Sign Up</span>
            <form action="" className="registerForm">
                <input type="text" name='name' value={data.name} onChange={inputHandle} className='registerInput' placeholder='HARISH KUMAR' />
                <input type="email" name='email' value={data.email} onChange={inputHandle} className='registerInput' placeholder='harishkumar@gmail.com' />
                <input type="password" name='password' value={data.password} onChange={inputHandle} className='registerInput' placeholder='**************' />
                <Link to='/register' className="registerBtn">Register</Link>
                <Link to='/login' className="loginBtn">Log In</Link>
            </form>
        </div>
    )
}

export default Register
