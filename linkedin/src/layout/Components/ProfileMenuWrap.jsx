import React from 'react'
import { Link } from 'react-router-dom'
import user1 from '../../assets/user-1.png'

export default function ProfileMenuWrap({ name }) {
  return (
    <>
        <div className="profile-menu-wrap" id="profileMenu">
            <div className="profile-menu">
                <div className="user-info">
                    <img src={user1} alt="user-image" className="nav-profile-img" />
                    <div>
                        <h3>{ name }</h3>
                        <Link to="/profile">See your profile</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
