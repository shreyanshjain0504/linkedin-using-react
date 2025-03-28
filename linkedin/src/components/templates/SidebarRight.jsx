import React from 'react'
import SidebarNews from '../organisms/SidebarNews.jsx'
import SidebarAd from '../organisms/SidebarAd.jsx'
import SidebarUsefulLinks from '../organisms/SidebarUsefulLinks.jsx'
import { sideBarNews, usefulLinks } from '../utils/displayLists.js'
import user1 from '../../assets/user-1.png'
import logo from '../../assets/logo.png'

export default function SidebarRight() {
  return (
    <>
      <div className="right-sidebar">
        <SidebarNews imgLink="https://cdn-icons-png.flaticon.com/512/566/566021.png" sideBarNews={sideBarNews}/>
        <SidebarAd user1={user1} logo={logo} link="https://www.mi.com/global/" />
        <SidebarUsefulLinks imgLink="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" usefulLinks={usefulLinks}/>
      </div>
    </>
  )
}