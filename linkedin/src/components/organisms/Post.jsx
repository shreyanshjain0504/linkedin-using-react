import React from "react";

export default function Post({ post, lastPostElementRef }) {
  return (
    <div time={post.time} key={post.id} className="post" ref={lastPostElementRef}>
      <div className="post-author">
        <img src={post.iconImage} alt="Author" />
        <div>
          <h3>{post.name}</h3>
          <small>{post.designation}</small>
          <small>{post.postTime}</small>
        </div>
      </div>
      <p>{post.body}</p>
      {post?.image 
          && <img src={post.image} width="100%" alt="Post" />
      }
      <div className="post-stats">
        <div>
          <span>0 reactions</span>
        </div>
        <div>
          <span>0 comments</span>
        </div>
      </div>
    </div>
  );
};