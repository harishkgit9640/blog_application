import React from 'react'
import './register.css';
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import * as yup from "yup";
import axios from 'axios';
const Register = () => {

    const navigate = useNavigate();

    const registerHandle = async (values) => {
        try {
            await axios.post(`/auth/register`, values);
            // console.log(res.data);
            navigate('/login');
        } catch (error) {
            alert(error);
        }
    }

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            registerHandle(values);
        },
        validationSchema: yup.object({
            username: yup.string()
                .required("User Name Required")
                .min(4, "Name too short min 4 chars")
                .max(10, "Name too long max 10 chars"),
            email: yup.string()
                .required("E-mail Required"),

            password: yup.string()
                .required("password Required")
        })
    })

    return (
        <div className='register'>
            <span className="registerTitle">Sign Up</span>
            <form className="registerForm">
                <input type="text" name='username' onChange={formik.handleChange} className='registerInput' placeholder='jon singh' />
                <span className="text-danger">{formik.errors.username}</span>
                <input type="email" name='email' onChange={formik.handleChange} className='registerInput' placeholder='harishkumar@gmail.com' />
                <span className="text-danger">{formik.errors.email}</span>
                <input type="password" name='password' onChange={formik.handleChange} className='registerInput' placeholder='**************' />
                <span className="text-danger">{formik.errors.password}</span>
                <Link to='/register' typeof='submit' className=" btn registerBtn" onClick={formik.handleSubmit} >Register</Link>
                <Link to='/login' typeof='button' className=" btn loginBtn">Log In</Link>
            </form>
        </div>
    )
}

export default Register
