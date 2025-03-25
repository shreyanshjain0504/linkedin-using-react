import React from 'react';
import CreatePost from './CreatePost.jsx';
import PostsContainer from '../templates/PostsContainer.jsx';
import SortRangeBy from '../organisms/SortRangeBy.jsx';

function MainContainer() {
  return (
    <>
      <div className="main-content">
        <CreatePost />

        <SortRangeBy />

        {/* Infinite scroll  */}
        <PostsContainer />
      </div>
    </>
  );
}

export default MainContainer;
