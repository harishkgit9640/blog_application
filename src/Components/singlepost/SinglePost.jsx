import React, { useContext, useEffect, useState } from 'react'
import './singlePost.css';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Context } from '../../context/Context';

const SinglePost = () => {
    const { user } = useContext(Context);
    const navigate = useNavigate();
    const filePath = "http://localhost:5000/images/";
    const [post, setPost] = useState([]);
    const params = useParams();
    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`/post/${params.id}`);
            setPost(res.data);
        }
        fetchPost();
    }, [params.id]);

    const handleDelete = async () => {
        try {
            const deleteRes = await axios.delete(`/delete/${params.id}, username:${user.username}`);
            console.log(deleteRes);
            deleteRes && navigate('/');

        } catch (error) {

        }
    }

    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                {post.photo ? <img src={filePath + post.photo} className='singlePostImg' alt="db_img" /> : (
                    <img src="https://www.digitalvidya.com/blog/wp-content/uploads/2019/03/personal-blog-1024x538.jpg" alt="BlogImg" className="singlePostImg" />
                )}
                <h1 className="singlePostTitle">
                    {post.title}
                    {post.username === user.username && (
                        <div className="singleEdit">
                            <i className=" singleIcon fa-solid fa-pen-to-square"></i>
                            <i className=" singleIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
                        </div>
                    )}
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
