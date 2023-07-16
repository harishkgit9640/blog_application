import React from 'react'
import './post.css';
import Blog from '../blogs/Blogs'
const Post = ({ post }) => {
    return (
        <div className='posts'>
            {
                post.map((p) => {
                    return (<Blog posts={p} />)
                })
            }
        </div>
    )
}

export default Post
