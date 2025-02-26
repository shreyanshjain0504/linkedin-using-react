import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { posts, searchList, filterArray } from '../utils/displayLists.jsx';

export function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
        const [inputText, setInputText] = useState('');
        const [filterArray, setFilterArray] = useState(localStorage.getItem('filter') ? JSON.parse(localStorage.getItem('filter')) : [])

        function saveData() {
            localStorage.setItem('filter', JSON.stringify(filterArray))
        }

        useEffect(() => {
            localStorage.setItem('filter', JSON.stringify(filterArray))
            if (inputText != undefined) {
                setInputText(inputText.toLowerCase());
            }
        }, [inputText, filterArray])

        function toggle() {
            let dropdownContent = document.querySelector('.profile-menu-wrap1');
            dropdownContent.classList.toggle('open-menu1');
        }

        const showAllPostsWithName = (name) => {
            console.log(name);
            let updatedArray = [];
            let postArray = localStorage.getItem('data') 
                        ? JSON.parse(localStorage.getItem('data')) 
                        : posts
            postArray.forEach(post => {
                if (post.author.name === name) {
                    updatedArray.push(post);
                }
            });
            setFilterArray(updatedArray);
            saveData();
        }

        function List({ input }) {
            return (
                <ul>
                    {searchList.map(item => {
                        if (item.text.toLowerCase().includes(input)) {
                            return <Link key={item.id} onClick={() => {
                                showAllPostsWithName(item.text)
                            }}>{item.text}</Link>
                        }
                    })}
                </ul>
            )
        }
        return <OriginalComponent List={List} inputText={inputText} toggle={toggle} setInputText={setInputText} />
    }
    return NewComponent;
}

export default UpdatedComponent;