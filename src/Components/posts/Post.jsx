import React from 'react'
import './post.css';
import Blog from '../blogs/Blogs'
const Post = (post) => {
    console.log(post.post[0]);
    return (
        <div className='posts'>
            <Blog />

        </div>
    )
}

export default Post
