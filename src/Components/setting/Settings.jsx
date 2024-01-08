import React, { useContext, useState } from 'react'
import './settings.css';
import Sidebar from '../sidebar/Sidebar'
import axios from 'axios';
import { Context } from '../../context/Context';
import { useNavigate } from 'react-router-dom';

const Settings = () => {

    const { user } = useContext(Context);
    const navigate = useNavigate();
    const [file, setFile] = useState("");
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = async (e) => {
        console.log(data);
        e.preventDefault();
        if (file) {
            const fileData = new FormData();
            const filename = Date.now() + file.name;
            fileData.append("name", filename)
            fileData.append("file", file)
            console.log(fileData);

            setData({ ...data, photo: filename });
            try {
                console.log(fileData);
                // const imgRes = await axios.post(`/upload`, fileData);
                // console.log(imgRes);
            } catch (error) {
                console.log(error);
            }
        }
        try {
            console.log("comming..");
            // const postRes = await axios.post(`/auth/register`, data);
            // postRes && navigate('/');
            // console.log(postRes);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='setting'>
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdate">Update Your Account</span>
                    <span className="settingDelete">Delete Account</span>
                </div>
                <form action="" className="settingForm">
                    <label htmlFor="#">Profile Picture</label>
                    <div className="settingPP">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon fa fa-user-circle"></i>
                        </label>
                        <input type="file" id='fileInput' style={{ display: "none" }} />
                        <input type="file" onChange={(e) => setFile(e.target.files[0])} id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label htmlFor="username">User Name</label>
                    <input type="text" name="username" value={data.username} onChange={handleChange} placeholder='john' />
                    <label htmlFor="email">User email</label>
                    <input type="email" name="email" value={data.email} onChange={handleChange} placeholder='hk@gmail.com' />
                    <label htmlFor="password">User password</label>
                    <input type="password" name="password" value={data.password} onChange={handleChange} placeholder='*******' />
                    <button className='settingSubmit' onClick={handleSubmit} >Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
