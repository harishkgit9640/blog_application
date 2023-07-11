import React from 'react'
import './topheader.css'
import usrImage from './user_img.png';
const TopHeader = () => {
    return (
        <div>
            <div className="top-bar">
                <div className="top-left">
                    <i className=" topIcon fa-brands fa-facebook"></i>
                    <i className=" topIcon fa-brands fa-instagram"></i>
                    <i className=" topIcon fa-brands fa-linkedin"></i>
                    <i className=" topIcon fa-brands fa-github"></i>
                </div>
                <div className="top-center">
                    <div className="top-list">
                        <li className="topListItem">Home</li>
                        <li className="topListItem">About</li>
                        <li className="topListItem">Contact</li>
                        <li className="topListItem">Write</li>
                        <li className="topListItem">Login</li>
                    </div>
                </div>
                <div className="top-right">
                    <img className="top-img" src={usrImage} alt="top-img" />
                    <i className=" searchIcon fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

        </div>
    )
}

export default TopHeader
