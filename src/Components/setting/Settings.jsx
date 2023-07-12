import React from 'react'
import './settings.css';
import Sidebar from '../sidebar/Sidebar'

const Settings = () => {
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
                    </div>
                    <label htmlFor="name">User Name</label>
                    <input type="text" placeholder='Harish' />
                    <label htmlFor="email">User email</label>
                    <input type="email" placeholder='hk@gmail.com' />
                    <label htmlFor="password">User password</label>
                    <input type="password" placeholder='*******' />
                    <button className='settingSubmit'>Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
