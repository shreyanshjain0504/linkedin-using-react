import React from 'react'
import PropTypes from 'prop-types';

export default function Input({ className = 'form-input', type = 'text', placeholder, value, onChange, id, onClick }) {
  return (
    <>
        <input className={className} 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onClick={onClick} 
                onChange={onChange} 
                name={id} 
                id={id} 
        required/>
    </>
  )
}

Input.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};