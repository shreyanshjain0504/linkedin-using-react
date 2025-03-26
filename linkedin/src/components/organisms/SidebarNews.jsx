import React from 'react'
import NewsLink from '../molecules/NewsLink'
import _ from 'lodash'

export default function SidebarNews({ sideBarNews }) {
  return (
    <>
      <div className="sidebar-news">
        <h3>Trending News</h3>
        {_.map(sideBarNews, (item) => (
            <NewsLink key={item.link} {...item} />
        ))}
      </div>
    </>
  )
}
