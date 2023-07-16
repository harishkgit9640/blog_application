import React, { useEffect, useState } from 'react'
import './sidebar.css';
import axios from 'axios';

export default function Sidebar() {

    const [category, setCategory] = useState([]);
    useEffect(() => {
        const fetchCategory = async () => {
            // const url = http://localhost:5000/api/categories
            const res = await axios.get('/categories');
            setCategory(res.data);
            // console.log(res.data);
        }
        fetchCategory();
    }, []);

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
                    {
                        category.map((cat) => {
                            return (<li className="sideListItem" key={cat.name}>{cat.name}</li>)
                        })
                    }
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
