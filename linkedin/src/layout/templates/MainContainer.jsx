import React, { useState, useEffect } from 'react'
import { PostsContainer } from '../Components/Post'
import RefreshBanner from '../utils/RefreshBanner.jsx'
import CreatePost from '../Components/CreatePost.jsx'
import PostsList from '../templates/PostsList.jsx'
import SortRangeBy from '../Components/SortRangeBy.jsx'
import UpdatedComponent from '../HOCs/MainContainerHOC.jsx'

function MainContainer({ postArray, setPostArray }) {
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

export default UpdatedComponent(MainContainer)