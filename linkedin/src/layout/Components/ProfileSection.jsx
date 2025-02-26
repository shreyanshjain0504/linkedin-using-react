import React from 'react'
import { COVER_PIC, LOCATION, NAME, ROLE, USER_IMAGE } from '../Constants/Constants'
import { Link } from 'react-router-dom'
import chat from '../../assets/chat.png'

export default function ProfileSection({ mutuals }) {
    return (
        <>
            <div className="profile-container">
                <img src={COVER_PIC} />
                <div className="profile-container-inner">
                    <img src={USER_IMAGE} className="profile-pic" />
                    <h2>{NAME}</h2>
                    <b>{ROLE}</b>
                    <p>{LOCATION}</p>
                    <div className="mutual-connection">
                        <img src={USER_IMAGE} alt="" />
                        <span>{mutuals} mutual connections: Divyansh Pandey</span>
                    </div>
                    <div className="profile-btn">
                        <Link to="#"><img src={chat} />Chat</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
