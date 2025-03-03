import React, { useState, useEffect } from 'react'
import { PostsContainer } from '../Components/Post'
import RefreshBanner from '../utils/RefreshBanner.jsx'
import CreatePost from '../Components/CreatePost.jsx'
import PostsList from '../templates/PostsList.jsx'
import SortRangeBy from '../Components/SortRangeBy.jsx'
import { posts } from '../utils/displayLists.js'

function MainContainer() {
    const [postArray, setPostArray] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : posts);
    useEffect(() => {
        const savedPosts = localStorage.getItem('data');
        if (savedPosts) {
            setPostArray(JSON.parse(savedPosts));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(postArray));
        // setPostArray(JSON.parse(localStorage.getItem('data')))
    }, [postArray]);
    return (
        <>
            <RefreshBanner />
            <div className="main-content">

                <CreatePost postArray={postArray} setPostArray={setPostArray} />

                <SortRangeBy postArray={postArray} setPostArray={setPostArray} />

                {/* Post creation and addition functionality */}
                <PostsContainer posts={postArray} setPostArray={setPostArray} />

                {/* Infinite scroll  */}
                {/* <PostsList /> */}
            </div>
        </>
    )
}

export default MainContainer