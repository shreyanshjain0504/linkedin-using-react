import React from 'react'
import { recents, groups, sideProfileLink, profileDetails } from '../utils/displayLists.js';
import InfoCard from '../organisms/InfoCard.jsx'
import SidebarProfileBox from '../organisms/SidebarProfileBox.jsx'

export default function SidebarLeft() {
    return (
        <>
            <div className="left-sidebar">
                <SidebarProfileBox profileDetails={profileDetails} sideProfileLink={sideProfileLink} />
                <div>
                    <div className="sidebar-activity">
                        <InfoCard heading="Recent" list={recents} />
                        <InfoCard heading="Groups" list={groups} />
                    </div>
                </div>
            </div>
        </>
    )
}
