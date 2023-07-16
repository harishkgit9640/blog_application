import React, { useEffect, useState } from 'react'
import './singlePost.css';
import axios from 'axios';

const SinglePost = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`/post`);
            setPost(res.data);
            console.log(post);
        }
        fetchPost();
    }, [post]);
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src="https://www.appliedart.com/assets/images/blog/blogging-SMB.png" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                    <div className="singleEdit">
                        <i className=" singleIcon fa-solid fa-pen-to-square"></i>
                        <i className=" singleIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singleAuthor">Author : <b>Harish</b></span>
                    <span className="singleDate">1 hours ago</span>
                </div>
                <div className="singlePostDesc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis consectetur molestias suscipit laudantium provident. Hic nostrum ipsa culpa aspernatur placeat! Tempore fugiat inventore dolore suscipit dignissimos hic voluptate numquam consequuntur amet, atque itaque consectetur aspernatur quo corporis. Explicabo iure facilis, rem sint sequi eius esse minus ullam debitis aliquid pariatur tempore, reiciendis nostrum quis voluptatum ad? Explicabo molestias amet a repellat eaque numquam quisquam suscipit adipisci cum veniam! Laudantium tenetur ipsum nihil voluptatem facere, quisquam facilis aliquam, ad iure modi itaque eius consequuntur adipisci provident ratione quae! In possimus consectetur nihil saepe. Veritatis quasi quo qui exercitationem nemo. Porro, reiciendis.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil esse nulla, maiores voluptatum reiciendis, rerum, consequatur quae ut autem reprehenderit quam voluptate tempore cumque! Dignissimos, odio consequuntur. Laboriosam iusto exercitationem ad beatae dolore labore vitae at ducimus facilis, consequuntur inventore quia quam deserunt accusamus esse non aperiam aliquam consequatur laborum?
                </div>
            </div>
        </div>
    )
}

export default SinglePost
