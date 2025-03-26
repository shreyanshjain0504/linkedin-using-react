import PropTypes from 'prop-types';
import React from 'react'
import { Link } from 'react-router-dom'

export default function IconNavLink({ to, className, imgLink, text}) {
  return (
    <>
        <li>
          <Link to={to} className={className}>
          <img src={imgLink} alt="Icon Nav Link" />
          <span>{text}</span>
          </Link>
        </li>
    </>
  )
}

IconNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};