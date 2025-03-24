import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStartDate, setEndDate } from '../redux/Actions/actions'; 
import CreatePost from '../Components/CreatePost.jsx';
import PostsContainer from '../templates/PostsContainer.jsx';
import SortRangeBy from '../Components/SortRangeBy.jsx';

function MainContainer() {
  const { startDate, endDate } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleStartDateChange = (date) => {
    dispatch(setStartDate(date));
  }

  const handleEndDateChange = (date) => {
    dispatch(setEndDate(date));
  }

  return (
    <>
      <div className="main-content">
        <CreatePost />

        <SortRangeBy 
          startDate={startDate}
          setStartDate={handleStartDateChange}
          endDate={endDate}
          setEndDate={handleEndDateChange}  
        />

        {/* Infinite scroll  */}
        <PostsContainer />
      </div>
    </>
  );
}

export default MainContainer;
