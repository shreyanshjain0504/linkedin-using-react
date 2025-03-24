import React from 'react'
import PropTypes from 'prop-types';

export default function Label({ className="form-label", htmlFor, value }) {
  return (
    <>
        <label className={className} htmlFor={htmlFor}>
            {value}
        </label>
    </>
  )
}

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  value: PropTypes.string
}