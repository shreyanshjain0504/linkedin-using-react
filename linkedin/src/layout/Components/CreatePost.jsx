import React, { useState, useEffect } from 'react'
import video from '../../assets/video.png'
import event from '../../assets/event.png'
import { USER_IMAGE } from '../Constants/Constants';
import formatDate from '../helpers/formatDate'
import formattedDate from '../helpers/formattedDate'

export default function CreatePost({ postArray, setPostArray }) {

    const [file, setFile] = useState('')
    const [text, setText] = useState('')

    function handleChange(e) {
        setFile(URL.createObjectURL(e?.target?.files[0]));
    }

    useEffect(() => {
        saveData();
        loadData();
    }, [postArray]);

    const saveData = () => {
        localStorage.setItem('data', JSON.stringify(postArray));
    };

    const loadData = () => {
        const savedPosts = localStorage.getItem("posts");
        if (savedPosts) {
            setPostArray(JSON.parse(savedPosts));
        }
    };

    function createPost() {
        if (text == '') {
            alert("Enter some text!");
            document.querySelector('input[type=file]').value = '';
            setFile(null);
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

        setPostArray(postArray => {
            const updatedArray = [...postArray, newPost];
            localStorage.setItem('data', JSON.stringify(updatedArray)); // Save immediately
            return updatedArray;
        });

        saveData();
        loadData();
        alert('Post created!');
        setText('')
        document.querySelector('input[type=file]').value = '';
        setFile(null);
    }
  return (
    <>
        <div className="create-post">
            <div className="create-post-input">
                <img src={USER_IMAGE} />
                <textarea rows="2" value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a post"></textarea>
            </div>
            <div className="create-post-links">
                <li>
                    <input type="file" onChange={handleChange} style={{
                        width: "10vw"
                    }} />
                </li>
                <li><img src={video} />Video</li>
                <li><img src={event} />Event</li>
                <li className="submit-class" onClick={createPost}>Post</li>
            </div>
        </div>
    </>
  )
}