import React from 'react'
import ProfileMenuWrap from '../Components/ProfileMenuWrap';
import WithNavbarRight from '../hoc/withNavbarRight.jsx';
import { NAME, USER_IMAGE } from '../constants/constants';

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

export default WithNavbarRight(NavbarRight)