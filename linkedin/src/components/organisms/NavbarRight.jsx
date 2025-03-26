import React from 'react';
import ProfileMenuWrap from './ProfileMenuWrap';
import { USER_IMAGE } from '../constants/constants';
import withNavbarRight from '../hoc/withNavbarRight'; 

function NavbarRight({ isMenuOpen, toggleMenu }) {
  return (
    <>
      <div className="navbar-right">
        <img
          src={USER_IMAGE}
          className="nav-profile-img"
          alt="user-image"
          onClick={toggleMenu}
        />
      </div>
      {isMenuOpen && <ProfileMenuWrap />}
    </>
  );
}

export default withNavbarRight(NavbarRight);