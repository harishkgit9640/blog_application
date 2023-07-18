import React, { useEffect, useState } from 'react'
import './home.css';
import Post from '../posts/Post'
import Sidebar from '../sidebar/Sidebar'
import axios from 'axios';

const Home = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get('/post');
            setPost(res.data);
        }
        fetchPost();
    }, []);

    return (
        <>
            <div className="home-header">React & Node Blog</div>
            <div className="home">
                <Post post={post} />
                <Sidebar />
            </div>
        </>
    )
}

export default Home
