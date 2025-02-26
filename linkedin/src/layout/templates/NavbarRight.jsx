import React from 'react'
import ProfileMenuWrap from '../Components/ProfileMenuWrap';
import UpdatedComponent from '../HOCs/NavbarRightHOC';
import { NAME, USER_IMAGE } from '../Constants/Constants';

function NavbarRight({ toggleMenu }) {
  return (
    <>
      <div className="navbar-right">
        <img src={USER_IMAGE} className="nav-profile-img" alt="user-image" onClick={toggleMenu} />
      </div>
      <ProfileMenuWrap name={NAME} />
    </>
  )
}

export default UpdatedComponent(NavbarRight)