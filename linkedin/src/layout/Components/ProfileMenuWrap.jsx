import React from 'react'
import { Link } from 'react-router-dom'
import user1 from '../../assets/user-1.png'
import { NAME, ROLE } from '../constants/constants'

export default function ProfileMenuWrap({ name }) {
  return (
    <>
        <div className="profile-menu-wrap" id="profileMenu">
            <div className="profile-menu">
                <div className="user-info">
                    <img src={user1} alt="user-image" className="nav-profile-img" />
                    <div>
                        <h3>{ NAME }</h3>
                        <b>{ ROLE }</b>
                        <Link to="/profile">See your profile</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
