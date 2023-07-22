import React, { useContext, useState } from 'react'
import './write.css';
import axios from 'axios';
import { Context } from '../../context/Context';

const Write = () => {
    const { user } = useContext(Context);
    const [file, setFile] = useState(null);
    const [data, setData] = useState({
        username: user.username,
        title: "",
        desc: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { data };
        console.log(JSON.stringify(newPost));

        if (file) {
            const fileData = new FormData();
            const filename = Date.now() + file.name;
            fileData.append("name", filename)
            fileData.append("file", file)
            newPost.photo = filename;
            try {
                console.log(fileData);
                // const postRes = await axios.post(`/upload`, fileData)
            } catch (error) {
                console.log(error);
            }
        }
        try {
            // const postRes = await axios.post(`/post`, newPost)
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div className='write'>
            {file &&
                <img src={URL.createObjectURL(file)} alt="writeImg" className="writeImg" />}
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
