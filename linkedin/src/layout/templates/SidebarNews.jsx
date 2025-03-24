import React from 'react'
import NewsLink from '../molecules/NewsLink'

export default function SidebarNews({ imgLink, sideBarNews }) {
  return (
    <>
      <div className="sidebar-news">
        <h3>Trending News</h3>
        {sideBarNews.map(item =>
          <NewsLink key={item.link} link={item.link} text={item.text} readBy={item.readBy} />
        )}
      </div>
    </>
  )
}
