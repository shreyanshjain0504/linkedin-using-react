import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setInputText, setFilterArray, setIsSearchListOpen } from '../redux/Actions/actions.js';
import { searchList } from '../utils/displayLists.js';
import saveData from '../helpers/saveData.js';
import _ from 'lodash'

export default function withNavbarLeft(NavbarLeft) {
  return () => {
    const dispatch = useDispatch();
    const inputText = useSelector(state => state.inputText);
    const isSearchListOpen = useSelector(state => state.isSearchListOpen);

    useEffect(() => {
      if (inputText !== undefined) {
        dispatch(setInputText(inputText.toLowerCase()));
      }
    }, [inputText, dispatch]);

    useEffect(() => {
      console.log(`Search list is ${isSearchListOpen ? "open" : "closed"}`);
    }, [isSearchListOpen]);

    const toggle = () => {
      dispatch(setIsSearchListOpen(!isSearchListOpen)); 
    };

    const showAllPostsWithName = (name) => {
      const postArray = localStorage.getItem('allPosts') ? JSON.parse(localStorage.getItem('allPosts')) : [];
      const filteredPosts = _.filter(postArray, post => {
          return post.name === name
      });
      saveData('filter', JSON.stringify(filteredPosts));
      dispatch(setFilterArray(filteredPosts));
    };

    const List = ({ input }) => {
      return (
        <ul>
          {_.map(searchList, item => {
            if (item.text.toLowerCase().includes(input)) {
              return (
                <Link
                  key={item.id}
                  onClick={() => {
                    showAllPostsWithName(item.text);
                  }}
                >
                  {item.text}
                </Link>
              );
            }
          })}
        </ul>
      );
    };

    const handleSetInputText = (text) => {
      dispatch(setInputText(text));
    };

    return (
      <NavbarLeft
        List={List}
        inputText={inputText}
        toggle={toggle}       
        setInputText={handleSetInputText}
        isSearchListOpen={isSearchListOpen}  
      />
    );
  };
}
