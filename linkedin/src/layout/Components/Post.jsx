import React, { useEffect } from "react";

const Post = ({ post }) => {
  return (
    <div time={post.time} className="post">
      <div className="post-author">
        <img src={ post.iconImage } alt="Author" />
        <div>
          <h3>{post.author.name}</h3>
          <small>{post.author.designation}</small>
          <small>{post.postTime}</small>
        </div>
      </div>
      <p>{post.content}</p>
      { post?.image && 
      <img src={ post.image } width="100%" alt="Post" height="450px"/> }
      <div className="post-stats">
        <div>
          <span className="liked-user">{post.reactions} reactions</span>
        </div>
        <div>
          <span>{post.comments} comments</span>
        </div>
      </div>
    </div>
  );
};

const PostsContainer = ({ posts }) => {
  if (localStorage.getItem('filter') && JSON.parse(localStorage.getItem('filter')) != []) {
    posts = JSON.parse(localStorage.getItem('filter'));
    console.log(posts)
    localStorage.removeItem('filter')
  }  
  useEffect(() => {
    localStorage.removeItem('filter')
  }, []);
  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export { Post, PostsContainer };
