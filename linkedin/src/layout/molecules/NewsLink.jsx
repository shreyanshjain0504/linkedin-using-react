import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsLink({ link, text, readBy }) {
  return (
    <>
        <Link to={ link }>{ text }</Link>
        <span>{ readBy }</span>
    </>
  )
}
