import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default function IconLink({ className, imgLink, text }) {
  return (
    <>
        <Link to="#" key={ imgLink } className={className}>
          <img src={imgLink} alt="Icon Image" />
          {text}
        </Link>
    </>
  )
}

IconLink.propTypes = {
  imgLink: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};