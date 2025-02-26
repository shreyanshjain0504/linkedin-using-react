import React from 'react'
import { Link } from 'react-router-dom'

export default function IconNavLink({ to, className='', imgLink, text}) {
  return (
    <>
        <li>
          <Link to={to} className={className}>
          <img src={imgLink} />
          <span>{text}</span>
          </Link>
        </li>
    </>
  )
}
