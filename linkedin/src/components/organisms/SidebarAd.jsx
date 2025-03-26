import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarAd({ user1, logo, link }) {
  return (
    <>
        <div className="sidebar-ad">
            <small>Ad</small>
            <p>Master the 5 principles of web design</p>
            <div>
                <img src={user1} alt="User Image" />
                <img src={logo} alt="Logo" />
            </div>
            <b>Brand and Demand in TekionIn</b>
            <Link to={ link } className="ad-link">Learn More</Link>
        </div>
    </>
  )
}
