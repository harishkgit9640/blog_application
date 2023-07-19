import React, { useState } from 'react'
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {

    const [Data, setData] = useState({ username: "", password: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData, [name]: value
        }));
    };
    if (Data.username === "" && Data.password === "") {
        alert("username and password are required!");
        console.log("username and password are required!");
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("working..");
        alert(`Name: ${Data.username}, Email: ${Data.password}`);

    }

    return (
        <div className='login'>
            <span className="loginTitle">Log In</span>
            <form action="" className="loginForm" onSubmit={handleSubmit}>
                <input type="text" name='username' value={Data.username} onChange={handleChange} className='loginInput' placeholder='Enter your Email..' />
                <input type="password" name='password' value={Data.password} onChange={handleChange} className='loginInput' placeholder='Enter your Password..' />
                <Link to='/login' className="loginBtn" >Log In</Link >
                <Link to='/register' className="registerBtn">Register</Link >
            </form>
        </div>
    )
}

export default Login
