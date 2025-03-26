import React from 'react'
import PropTypes from 'prop-types';

export default function Button({className='', value, onClick='', textContent}) {
  return (
    <>
        <button className={className} 
                onClick={onClick} 
                value={value}
        >
        { textContent }
        </button>
    </>
  )
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.string,
  value: PropTypes.string,
};