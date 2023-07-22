import React from 'react'
import './blog.css'
import { Link } from 'react-router-dom';
const Blog = ({ posts }) => {
    const filePath = "http://localhost:5000/images/";
    return (
        <div className='post' key={posts.id}>
            {posts.photo ? <img src={filePath + posts.photo} className='postImg' alt="db_img" /> : (
                <img src="https://www.digitalvidya.com/blog/wp-content/uploads/2019/03/personal-blog-1024x538.jpg" alt="BlogImg" className="postImg" />
            )}
            <div className="postInfo">
                <div className="postCats">
                    {posts.categories.map((cat, index) => (
                        <span className="postCat" key={index}>{cat}</span>
                    ))}
                </div>
                <span className="postTitle">
                    <Link to={`/post/${posts._id}`}>{posts.title}</Link>
                </span>
                <span className="postDate">{new Date(posts.createdAt).toDateString()}</span>
                <p className="postDesc">
                    {posts.desc}
                </p>
            </div>
        </div>
    )
}

export default Blog
