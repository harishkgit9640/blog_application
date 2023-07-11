import React from 'react'
import './blog.css'
const Blog = () => {
    return (
        <div className='post'>
            <img src="https://www.digitalvidya.com/blog/wp-content/uploads/2019/03/personal-blog-1024x538.jpg" alt="BlogImg" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet.
                </span>
                <span className="postDate">1 hour ago</span>
                <p className="postDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aperiam culpa reprehenderit, aliquam doloremque hic earum id commodi explicabo error numquam quibusdam ea! Est inventore blanditiis aut cum enim dolorum dolorem nobis ex a impedit quisquam, voluptatem obcaecati rem quod odio ratione ut excepturi ea? Minima, unde totam, perferendis hic sed distinctio tenetur ea sit repudiandae eveniet sunt neque fugiat et sequi dolorum in culpa tempora consequuntur maiores odio quo similique quibusdam. Quod debitis illo maxime nobis eius perferendis voluptas nesciunt similique maiores? Fugiat quae, impedit veniam quis quidem dolor quibusdam labore architecto, minima iure sed laborum tenetur quia animi.
                </p>
            </div>
        </div>
    )
}

export default Blog
