import React, { useCallback, useEffect, useRef, useState } from "react";
import { fetchPosts } from "../utils/Services.jsx";
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import postImage1 from '../../assets/post-image-1.png'
import postImage4 from '../../assets/post-image-4.png'

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const loadMorePosts = useCallback(async () => {
    setLoading(true);
    const newPosts = await fetchPosts(page, 2);
    if (newPosts.length === 0) {
      setHasMore(false); // Set hasMore to false if no more posts are returned
    } else {
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    if (hasMore) {
      loadMorePosts();
    }
  }, [loadMorePosts, hasMore]);

  const lastPostElementRef = useCallback(
    (node) => {
      if (loading || !hasMore) return; // Stop observing if loading or no more posts
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => 1 + prevPage); // Trigger loading of new posts by changing page number
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const formattedDate = (date = new Date()) => {
    return new Date().toISOString().split('T')[0];
  }

  const formatDate = (date = new Date()) => {
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    return `${dd.toString().padStart(2, '0')}/${mm.toString().padStart(2, '0')}/${yyyy}`;
};

  return (
    <div>
      <ul>
        {posts.map((post, index) => (

        <div time={formattedDate()} key={post.id} className="post" ref={posts.length === index + 1 ? lastPostElementRef : null}>
            <div className="post-author">
                <img src={ index % 2 ? user1 : user2 } alt="Author" />
                <div>
                    <h3>{ index % 2 ? "Shreyansh Jain" : "Divyansh Pandey" }</h3>
                    <small>{ index % 2 ? "ASE Intern Tekion" : "SDE Intern Amazon" }</small>
                    <small>{ formatDate() }</small>
                </div>
            </div>
            <p>{post.body}</p>
            <img src={ index % 2 ? postImage1 : postImage4 } width="100%" alt="Post" />
            <div className="post-stats">
                <div>
                    <span className="liked-user">0 reactions</span>
                </div>
                <div>
                    <span>0 comments</span>
                </div>
            </div>
        </div>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {/* Message indicating no more posts */}
    </div>
  );
};

export default PostsList;
