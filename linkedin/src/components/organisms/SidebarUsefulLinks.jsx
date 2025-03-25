import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

export default function SidebarUsefulLinks({ imgLink, usefulLinks }) {
  return (
    <>
      <div className="sidebar-useful-links">
        {_.map(usefulLinks, (item) => (
            <Link to={item.link} key={item.text}>{item.text}</Link>
        ))}
        <div className="copyright-msg">
          <img src={ imgLink } alt="Copyright" />
          <p>TekionIn C 2025. All rights reserved</p>
        </div>
      </div>
    </>
  )
}
