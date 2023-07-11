import React from 'react'
import './sidebar.css';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsum quidem qui eum dolorem optio maiores quia ex, harum cumque.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Category</span>
                <ul className="sidebarList">
                    <li className="sideListItem">Life</li>
                    <li className="sideListItem">sport</li>
                    <li className="sideListItem">programming</li>
                    <li className="sideListItem">food</li>
                    <li className="sideListItem">news</li>
                    <li className="sideListItem">cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className=" sidebarIcon fa-brands fa-facebook"></i>
                    <i className=" sidebarIcon fa-brands fa-instagram"></i>
                    <i className=" sidebarIcon fa-brands fa-linkedin"></i>
                    <i className=" sidebarIcon fa-brands fa-github"></i>
                </div>
            </div>

        </div>
    )
}
