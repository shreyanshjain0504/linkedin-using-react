import React, { useState, useEffect } from 'react'
import video from '../../assets/video.png'
import photo from '../../assets/photo.png'
import event from '../../assets/event.png'
import { USER_IMAGE } from '../constants/constants';
import formatDate from '../helpers/formatDate'
import formattedDate from '../helpers/formattedDate'
import TextArea from '../atoms/TextArea';

export default function CreatePost({ postArray, setPostArray }) {

    const [file, setFile] = useState('')
    const [text, setText] = useState('')

    function handleChange(e) {
        setFile(URL.createObjectURL(e?.target?.files[0]));
    }

    useEffect(() => {
        saveData();
        loadData();
    }, []);

    const saveData = () => {
        localStorage.setItem('data', JSON.stringify(postArray));
    };

    const loadData = () => {
        const savedPosts = localStorage.getItem('data');
        if (savedPosts) {
            setPostArray(JSON.parse(savedPosts));
        }
        return postArray
    };

    function createPost() {
        if (text == '') {
            alert("Enter some text!");
            return;
        }
        if (file == undefined) {
            alert('Select any image to upload!');
            return;
        }

        const today = new Date();
        const formatToday = formatDate(today);
        const formattedToday = formattedDate(today);
        let newPost = {
            postTime: formatToday,
            iconImage: USER_IMAGE,
            image: file,
            time: formattedToday,
            content: text,
            author: {
                name: "Shreyansh Jain",
                designation: "ASE Intern Tekion"
            },
            reactions: 0,
            comments: 0
        };

        const updatedArray = [...postArray, newPost];
        setPostArray(updatedArray);
        saveData();
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
                        <label for="file-upload" class="custom-file-upload">
                            <img src={photo} />
                            Photo
                        </label>
                        <input id="file-upload" type="file" onChange={handleChange} style={{
                            width: "10vw"
                        }}/>
                    </li>

                    <li><img src={video} />Video</li>
                    <li><img src={event} />Event</li>
                    <li className="submit-class" onClick={createPost}>Post</li>
                </div>
            </div>
        </>
    )
}