import React from 'react';
import downArrow from '../../assets/down-arrow.png';
import filterPostsByDateRange from '../helpers/filterPostsByDateRange';
import Label from '../atoms/Label';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { useDispatch, useSelector } from 'react-redux';
import { setStartDate, setEndDate } from '../redux/Actions/actions';

export default function RangeDisplay() {
  const startDate = useSelector((state) => state.startDate);
  const endDate = useSelector((state) => state.endDate);
  const dispatch = useDispatch();

  const handleStartDateChange = (event) => {
    dispatch(setStartDate(event.target.value)); 
  };

  const handleEndDateChange = (event) => {
    dispatch(setEndDate(event.target.value));
  };

  return (
    <>
      <p>
        Range:
        <span>
          <div className="dropdown">
            top <img src={downArrow} alt="Down Arrow" />
            <div className="dropdown-date">
              <Label className="" htmlFor="start" value="Start:" />
              <Input
                type="date"
                id="start"
                value={startDate} 
                onChange={handleStartDateChange}
              />
              <hr />
              <Label className="" htmlFor="end" value="End:" />
              <Input
                type="date"
                id="end"
                value={endDate} 
                onChange={handleEndDateChange} 
              />
              <hr />
              <Button
                onClick={() => filterPostsByDateRange(startDate, endDate)}
                textContent="Submit"
                value="submit"
              />
            </div>
          </div>
        </span>
      </p>
    </>
  );
}
