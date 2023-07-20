import React, { useContext } from 'react'
import './login.css';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import * as yup from "yup";
import { Context } from '../../context/Context';
const Login = () => {
    const { dispatch, isFetching } = useContext(Context)

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (values) => {
            dispatch({ type: "LOGIN_START" });
            try {
                const res = axios.post(`/auth/login`, values);

                dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

            } catch (error) {
                dispatch({ type: "LOGIN_FAILURE" });
            }
        },
        validationSchema: yup.object({
            username: yup.string()
                .required("User Name Required")
                .min(4, "Name too short min 4 chars")
                .max(10, "Name too long max 10 chars"),
            password: yup.string()
                .required("password Required")
        })
    })

    console.log(isFetching);
    return (
        <div className='login'>
            <span className="loginTitle">Log In</span>
            <form className="loginForm" >
                <input type="text" name='username' onChange={formik.handleChange} className='registerInput' placeholder='jon singh' />
                <span className="text-danger">{formik.errors.username}</span>
                <input type="password" name='password' onChange={formik.handleChange} className='registerInput' placeholder='**************' />
                <span className="text-danger">{formik.errors.password}</span>
                <Link to='/login' type='submit' className="btn loginBtn" disable={isFetching} onClick={formik.handleSubmit} >Log In</Link >
                <Link to='/register' type='button' className="btn registerBtn">Register</Link >
            </form>
        </div>
    )
}

export default Login
