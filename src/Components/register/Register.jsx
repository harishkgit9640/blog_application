import React from 'react'
import './register.css';
import { Link } from 'react-router-dom'
import { useFormik } from "formik";
import * as yup from "yup";
const Register = () => {

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        },
        validationSchema: yup.object({
            username: yup.string()
                .required("User Name Required")
                .min(4, "Name too short min 4 chars")
                .max(10, "Name too long max 10 chars"),
            email: yup.string()
                .required("E-mail Required"),

            password: yup.string()
                .required("Mobile Required")
        })
    })

    return (
        <div className='register'>
            <span className="registerTitle">Sign Up</span>
            <form action="" className="registerForm" onSubmit={formik.handleSubmit}>
                <input type="text" name='name' onChange={formik.handleChange} className='registerInput' placeholder='HARISH KUMAR' />
                <span className="text-danger">{formik.errors.username}</span>
                <input type="email" name='email' onChange={formik.handleChange} className='registerInput' placeholder='harishkumar@gmail.com' />
                <span className="text-danger">{formik.errors.email}</span>
                <input type="password" name='password' onChange={formik.handleChange} className='registerInput' placeholder='**************' />
                <span className="text-danger">{formik.errors.password}</span>
                <Link to='/register' className="registerBtn">Register</Link>
                <Link to='/login' className="loginBtn">Log In</Link>
            </form>
        </div>
    )
}

export default Register
