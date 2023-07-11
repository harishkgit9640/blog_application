import React from 'react'
import './home.css';
import Post from '../posts/Post'
import Sidebar from '../sidebar/Sidebar'

const Home = () => {
    return (
        <>
            <div className="home-header">React & Node Blog</div>
            <div className="home">
                <Post />
                <Sidebar />
            </div>
        </>
    )
}

export default Home
