import React from 'react'
import Navbar from '../Components/Navbar'
import SidebarLeft from '../templates/SidebarLeft'
import MainContainer from '../templates/MainContainer'
import SidebarRight from '../templates/SidebarRight'

export default function Home() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <SidebarLeft />
        <MainContainer />
        <SidebarRight />
      </div>
    </>
  )
}
