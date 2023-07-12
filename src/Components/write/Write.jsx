import React from 'react'
import './write.css';

const Write = () => {
    return (
        <div className='write'>
            <img src="https://img.freepik.com/premium-photo/social-media-blog-concept-futuristic-icon-design-graphics-hand-with-smartphone_102583-6104.jpg" alt="writeImg" className="writeImg" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className='writeIcon fas fa-circle-plus'></i>
                    </label>
                    <input type="file" name="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" name="title" id="title" placeholder='Title ...' autoFocus={true} className='writeInput' />
                </div>
                <div className="writeFormGroup">
                    <textarea type="text" placeholder='Tell your story...' className='writeInput writeText' ></textarea>
                </div>
                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    )
}

export default Write
