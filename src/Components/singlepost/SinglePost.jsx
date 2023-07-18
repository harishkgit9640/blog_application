import React, { useEffect, useState } from 'react'
import './singlePost.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const SinglePost = () => {
    const [post, setPost] = useState([]);
    const params = useParams();
    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`/post/${params.id}`);
            setPost(res.data);
        }
        fetchPost();
    }, [params.id]);

    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://www.appliedart.com/assets/images/blog/blogging-SMB.png" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singleEdit">
                        <i className=" singleIcon fa-solid fa-pen-to-square"></i>
                        <i className=" singleIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singleAuthor">Author : <Link to={`/post?user=${post.username}`} ><b>{post.username}</b></Link></span>
                    <span className="singleDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <div className="singlePostDesc">
                    {post.desc}
                </div>
            </div>
        </div>
    )
}

export default SinglePost
