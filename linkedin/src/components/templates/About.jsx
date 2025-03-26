import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../atoms/Button';
import { setShowMore } from '../redux/Actions/actions'; // import the action
import { TEXT } from '../constants/constants';

export default function About() {
  const showMore = useSelector(state => state.showMore);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setShowMore(!showMore));
  }

  return (
    <>
      <div className="profile-description">
        <h2>About</h2>
        <p>{showMore ? TEXT : `${TEXT.substring(0, 100)}`}</p>
        <Button onClick={handleClick} 
                textContent={!showMore ? "Show More..." : "Show Less"} 
        />
      </div>
    </>
  );
}
