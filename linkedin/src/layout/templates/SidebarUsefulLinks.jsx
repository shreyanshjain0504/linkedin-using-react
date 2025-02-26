import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarUsefulLinks({ imgLink, usefulLinks }) {
  return (
    <>
      <div className="sidebar-useful-links">
        {usefulLinks.map(item =>
          <Link to={item.link}>{item.text}</Link>
        )}
        <div className="copyright-msg">
          <img src={ imgLink } />
          <p>TekionIn C 2025. All rights reserved</p>
        </div>
      </div>
    </>
  )
}
