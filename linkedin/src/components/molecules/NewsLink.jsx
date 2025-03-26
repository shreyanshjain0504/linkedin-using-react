import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default function NewsLink({ link, text, readBy }) {
  return (
    <>
        <Link to={ link }>{ text }</Link>
        <span>{ readBy }</span>
    </>
  )
}

NewsLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  readBy: PropTypes.string.isRequired
}