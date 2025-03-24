import React from 'react'
import IconLink from '../molecules/IconLink'
import ProfileDetails from '../molecules/ProfileDetails'
import { Link } from 'react-router-dom'
import { COVER_PIC, NAME, ROLE, USER_IMAGE } from '../constants/constants'

export default function SidebarProfileBox({ profileDetails, sideProfileLink }) {
    return (
        <div>
            <div class="sidebar-profile-box">
                <img src={ COVER_PIC } width="100%" />
                <div class="sidebar-profile-info">
                    <Link to="/profile">
                        <img src={ USER_IMAGE } className="myImage" />
                    </Link>
                    <h3>{ NAME }</h3>
                    <span>{ ROLE }</span>
                    <ul>
                        {profileDetails.map(item => <ProfileDetails {...item} />)}
                    </ul>
                </div>
                <div class="sidebar-profile-link">
                    {sideProfileLink.map(item => <IconLink {...item} />)}
                </div>
            </div>
        </div>
    )
}
