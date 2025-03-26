import React from 'react';
import logo from '../../assets/logo.png';
import Button from '../atoms/Button';

export default function Experience({ exp, onRemove }) {
  const handleClick = () => {
    onRemove(exp.time, 'experience')
  };

  return (
    <>
      <div className="profile-desc-row" id={exp.time}>
        <img src={logo} alt={exp.company} />
        <div>
          <h3>{exp.company}</h3>
          <b>{exp.position}</b>
          <b>{exp.from} - {exp.to}</b>
          <p>{exp.desc}</p>
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