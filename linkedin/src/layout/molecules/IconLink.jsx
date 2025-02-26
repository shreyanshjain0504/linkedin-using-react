import React from 'react'
import { Link } from 'react-router-dom'

export default function IconLink({ className="", imgLink, text }) {
  return (
    <>
        <Link to="#" key={ imgLink } className={className}>
          <img src={imgLink} />
          {text}
        </Link>
    </>
  )
}
