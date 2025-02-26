import React from 'react'
import IconLink from '../molecules/IconLink'
import ProfileDetails from '../molecules/ProfileDetails'
import { Link } from 'react-router-dom'

export default function SidebarProfileBox({ user1, coverPic, name, role, profileDetails, sideProfileLink }) {
    return (
        <div>
            <div class="sidebar-profile-box">
                <img src={ coverPic } width="100%" />
                <div class="sidebar-profile-info">
                    <Link to="/profile">
                        <img src={ user1 } className="myImage" />
                    </Link>
                    <h3>{ name }</h3>
                    <span>{ role }</span>
                    <ul>
                        {profileDetails.map(item =>
                            <ProfileDetails colOneDetails={item.colOneDetails} colTwoDetails={item.colTwoDetails} />
                        )}
                    </ul>
                </div>
                <div class="sidebar-profile-link">
                    {sideProfileLink.map(item =>
                        <IconLink imgLink={item.imgLink} text={item.text} />
                    )}
                </div>
            </div>
            <hr />
        </div>
    )
}
