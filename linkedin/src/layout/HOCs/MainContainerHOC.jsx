import React, { useState, useEffect } from 'react'
import { posts } from '../utils/displayLists';

export function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
        const [postArray, setPostArray] = useState(posts);
        useEffect(() => {
            const savedPosts = localStorage.getItem('data');
            if (savedPosts) {
                setPostArray(JSON.parse(savedPosts));
            }
        }, []);

        useEffect(() => {
            localStorage.setItem('data', JSON.stringify(postArray));
        }, [postArray]);
        return <OriginalComponent postArray={postArray} setPostArray={setPostArray} />
    }
    return NewComponent;
}

export default UpdatedComponent;