import React, { useCallback, useEffect, useRef, useState } from "react";
import { fetchPosts } from "../utils/Services.jsx";
import SyncLoader from "react-spinners/SyncLoader";
import { dateList, names, postImageList, profileImageList, roles, sortDateList } from "../utils/displayLists.js";
import Post from "../Components/Post.jsx";
import saveData from "../helpers/saveData.js";

export default function PostsContainer() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]); 
  const observer = useRef();
  const postArray = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);

  const loadMorePosts = useCallback(async () => {
    setLoading(true);
    const newPosts = await fetchPosts(page, 3);
    if (newPosts.length === 0) {
      setHasMore(false); 
    } else {
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);

      for (let post of newPosts) {
        delete post.userId;
        post.designation = roles[indexRef.current];
        post.name = names[indexRef.current];
        post.image = postImageList[indexRef.current];
        post.iconImage = profileImageList[indexRef.current];
        post.postTime = dateList[indexRef.current];
        post.time = sortDateList[indexRef.current];
        indexRef.current = (indexRef.current + 1) % 5;
      }

      setIndex(indexRef.current);

      /* For saving in local storage */
      const allPosts = [...postArray, ...posts];
      const savedPosts = localStorage.getItem("allPosts")
        ? JSON.parse(localStorage.getItem("allPosts"))
        : [];
      if (allPosts.length > savedPosts.length) {
        saveData("allPosts", JSON.stringify(allPosts));
      }
    }
    setLoading(false);
  }, [page]);

  useEffect(() => {
    if (hasMore) {
      loadMorePosts();
    }
  }, [loadMorePosts, hasMore]);

  useEffect(() => {
    const storedFilteredPosts = localStorage.getItem("filter")
      ? JSON.parse(localStorage.getItem("filter"))
      : [];
    if (storedFilteredPosts.length > 0) {
      setFilteredPosts(storedFilteredPosts);
    } else {
      localStorage.removeItem("filter");
    }

    const interval = setInterval(() => {
      const storedFilteredPosts = localStorage.getItem("filter")
        ? JSON.parse(localStorage.getItem("filter"))
        : [];
      setFilteredPosts(storedFilteredPosts); 
    }, 500); 

    return () => clearInterval(interval); 
  }, []); 

  const lastPostElementRef = useCallback(
    (node) => {
      if (loading || !hasMore) return; 
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1); 
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="all-posts">
      {filteredPosts.length > 0 ?
        filteredPosts.map((post, index) => (
          <Post key={post.id} 
                post={post} 
          />
        )) :
        posts.map((post, index) => (
          <Post key={post.id}
                post={post}
                lastPostElementRef={posts.length === index + 1 ? lastPostElementRef : null}
          />
        ))
      }

      {loading 
          ? <SyncLoader /> 
          : (!loading && !hasMore && <p>No more posts to display!</p>)
      }
    </div>
  );
};