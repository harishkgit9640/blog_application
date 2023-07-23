import React, { useContext, useState } from 'react'
import './write.css';
import axios from 'axios';
import { Context } from '../../context/Context';
import { useNavigate } from 'react-router-dom';

const Write = () => {
    const { user } = useContext(Context);
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [data, setData] = useState({
        username: user.username,
        title: "",
        desc: "",
        photo: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            const fileData = new FormData();
            const filename = Date.now() + file.name;
            fileData.append("name", filename)
            fileData.append("file", file)
            setData({ ...data, photo: filename });
            try {
                console.log(fileData);
                const img = await axios.post(`/upload`, fileData);
                console.log(img);
            } catch (error) {
                console.log(error);
            }
        }
        try {
            const postRes = await axios.post(`/post`, data);
            postRes && navigate('/');
            console.log(postRes);
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className='write'>
            {file ? <img src={URL.createObjectURL(file)} alt="writeImg" className="writeImg" /> : (
                <img src="https://www.digitalvidya.com/blog/wp-content/uploads/2019/03/personal-blog-1024x538.jpg" alt="writeImg" className="writeImg" />
            )}

            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className='writeIcon fas fa-circle-plus'></i>
                    </label>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} id="fileInput" style={{ display: "none" }} />
                    <input type="text" name="title" value={data.title} onChange={handleChange} id="title" placeholder='Title ...' autoFocus={true} className='writeInput' />
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" name="desc" value={data.desc} onChange={handleChange} placeholder='Tell your story...' className='writeInput writeText' ></textarea>
                </div>
                <button className='writeSubmit' onClick={handleSubmit}>Publish</button>
            </form>
        </div>
    )
}

export default Write
