import React from 'react'
import NewsLink from '../molecules/NewsLink'

export default function SidebarNews({ imgLink, sideBarNews }) {
  return (
    <>
      <div className="sidebar-news">
        <img src={ imgLink } className="info-icon" alt="more img" />
        <h3>Trending News</h3>
        {sideBarNews.map(item =>
          <NewsLink key={item.link} link={item.link} text={item.text} readBy={item.readBy} />
        )}
      </div>
    </>
  )
}
