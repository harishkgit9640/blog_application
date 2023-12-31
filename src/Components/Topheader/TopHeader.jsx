import React, { useContext } from 'react'
import './topheader.css'
import usrImage from './user_img.png';
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../../context/Context';
const TopHeader = () => {
    const { user, dispatch } = useContext(Context);

    const logoutHandle = () => {
        dispatch({ type: "LOGOUT" })
    }

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
                        <li className="topListItem"><NavLink to='/home'> Home </NavLink> </li>
                        <li className="topListItem"><NavLink to='/home'> About </NavLink> </li>
                        <li className="topListItem"><NavLink to='/home'> Contact </NavLink> </li>
                        <li className="topListItem"><NavLink to='/write'> Write </NavLink> </li>
                        <li className="topListItem"><NavLink to='/' onClick={logoutHandle} > {user && "Logout"} </NavLink> </li>
                    </div>
                </div>
                <div className="top-right">
                    {user ? (<Link to="/setting"> <img className="top-img" src={usrImage} alt="top-img" /></Link>)
                        : (<>
                            <div className="top-list">
                                <li className="topListItem"><NavLink to='/login'> Login </NavLink> </li>
                                <li className="topListItem"><NavLink to='/register'> Register </NavLink> </li>
                            </div>
                        </>)
                    }
                    <i className=" searchIcon fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

        </div>
    )
}

export default TopHeader
