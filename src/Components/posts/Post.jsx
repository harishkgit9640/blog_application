import React from 'react'
import './post.css';
import Blog from '../blogs/Blogs'
const Post = ({ post }) => {
    return (
        <div className='posts'>
            {
                post.map((p, index) => {
                    return (<Blog posts={p} key={index} />)
                })
            }
        </div>
    )
}

export default Post
