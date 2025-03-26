import React from 'react';
import mit from '../../assets/mit.png';
import Button from '../atoms/Button';

export default function Education({ ed, onRemove }) {
  const handleClick = () => {
    onRemove(ed.time, 'education');  
  }

  return (
    <>
      <div className="profile-desc-row" id={ed.time}>
        <img src={mit} alt={ed.company} />
        <div>
          <h3>{ed.company}</h3>
          <b>{ed.position}</b>
          <b>{ed.from} - {ed.to}</b>
          <p>{ed.desc}</p>
          <hr />
        </div>
        <Button 
          className="remove-btn" 
          onClick={handleClick} 
          textContent="Remove" 
        />
      </div>
    </>
  );
};