import React from 'react';
import IconLink from '../molecules/IconLink';
import ProfileDetails from '../molecules/ProfileDetails';
import { Link } from 'react-router-dom';
import { COVER_PIC, NAME, ROLE, USER_IMAGE } from '../constants/constants';
import _ from 'lodash';

export default function SidebarProfileBox({ profileDetails, sideProfileLink }) {
    return (
        <div>
            <div className="sidebar-profile-box">
                <img src={COVER_PIC} width="100%" alt="Cover pic" />
                <div className="sidebar-profile-info">
                    <Link to="/profile">
                        <img src={USER_IMAGE} className="myImage" alt="User Image" />
                    </Link>
                    <h3>{NAME}</h3>
                    <span>{ROLE}</span>
                    <ul>
                        {_.map(profileDetails, (item, index) => (
                            <ProfileDetails key={item.id || index} {...item} />
                        ))}
                    </ul>
                </div>
                <div className="sidebar-profile-link">
                    {_.map(sideProfileLink, (item, index) => (
                        <IconLink key={item.id || index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
