import React from 'react'
import { COVER_PIC, LOCATION, NAME, ROLE, USER_IMAGE, MUTUALS } from '../constants/constants'

export default function ProfileSection() {
    return (
        <>
            <div className="profile-container">
                <img src={COVER_PIC} alt="cover-pic" />
                <div className="profile-container-inner">
                    <img src={USER_IMAGE} alt="User Image" className="profile-pic" />
                    <h2>{NAME}</h2>
                    <b>{ROLE}</b>
                    <p>{LOCATION}</p>
                    <div className="mutual-connection">
                        <img src={USER_IMAGE} alt="" />
                        <span>{MUTUALS} mutual connections: Divyansh Pandey</span>
                    </div>
                </div>
            </div>
        </>
    )
}
