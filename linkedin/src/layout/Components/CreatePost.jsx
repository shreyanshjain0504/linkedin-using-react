import React, { useState, useEffect } from 'react'
import video from '../../assets/video.png'
import photo from '../../assets/photo.png'
import event from '../../assets/event.png'
import { USER_IMAGE } from '../constants/constants';
import formatDate from '../helpers/formatDate'
import formatDateForSort from '../helpers/formatDateForSort'
import TextArea from '../atoms/TextArea';
import saveData from '../helpers/saveData';

export default function CreatePost() {
    const key = 'data'
    const [postArray, setPostArray] = useState(localStorage.getItem('data') 
                                    ? JSON.parse(localStorage.getItem('data')) 
                                    : [])
    const [file, setFile] = useState('')
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setFile(URL.createObjectURL(e?.target?.files[0]));
    }

    useEffect(() => {
        saveData();
    }, [postArray]);

    const createPost = () => {
        if (text === '') {
            alert("Enter some text!");
            return;
        }

        const date = new Date();
        const time = formatDate(date);
        const postTime = formatDateForSort(date);
        const newPost = {
            iconImage: USER_IMAGE,
            image: file,
            body: text,
            id: 7,
            title: "magnam facilis autem",
            userId: 1,
            name: "Shreyansh Jain",
            designation: "ASE Intern",
            time: time,
            postTime: postTime
        }
        const updatedArray = [...postArray, newPost];
        setPostArray(updatedArray);
        const value = JSON.stringify(updatedArray)
        saveData(key, value);
        alert('Post created!');
        setText('')
        setFile(null);
    }
    
    return (
        <>
            <div className="create-post">
                <TextArea text={text} setText={setText} />
                <div className="create-post-links">
                    <li>
                        <img src={photo} alt="camera" />
                        <label for="file-upload" 
                                class="custom-file-upload"
                        >
                            Photo
                        </label>
                        <input id="file-upload" 
                                type="file" 
                                onChange={handleChange} 
                        />
                    </li>

                    <li><img src={video} alt="video" />Video</li>
                    <li><img src={event} alt="event" />Event</li>
                    <li className="submit-class" onClick={createPost}>Post</li>
                </div>
            </div>
        </>
    )
}