import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setInputText, setFilterArray } from '../redux/Actions/actions';
import { searchList } from '../utils/displayLists.js';
import saveData from '../helpers/saveData.js';

export default function withNavbarLeft(NavbarLeft) {
  return () => {
    const dispatch = useDispatch();
    const inputText = useSelector(state => state.inputText);

    useEffect(() => {
      if (inputText !== undefined) {
        dispatch(setInputText(inputText.toLowerCase()));
      }
    }, [inputText, dispatch]);

    const toggle = () => {
      const dropdownContent = document.querySelector('.profile-menu-wrapper');
      dropdownContent.classList.toggle('open-menu-search');
    }

    const showAllPostsWithName = (name) => {
      const postArray = localStorage.getItem('allPosts') ? JSON.parse(localStorage.getItem('allPosts')) : [];
      const filteredPosts = postArray.filter(post => post.name === name);
      saveData('filter', JSON.stringify(filteredPosts));
      dispatch(setFilterArray(filteredPosts)); 
    };

    const List = ({ input }) => {
      return (
        <ul>
          {searchList.map(item => {
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
            return null;
          })}
        </ul>
      );
    }

    const handleSetInputText = (text) => {
      dispatch(setInputText(text))
    }

    return (
      <NavbarLeft
        List={List}
        inputText={inputText}
        toggle={toggle}
        setInputText={handleSetInputText}
      />
    );
  };
}
