import React from 'react'
import { recents, groups, sideProfileLink, profileDetails } from '../utils/displayLists.js';
import InfoCard from './InfoCard.jsx'
import SidebarProfileBox from './SidebarProfileBox.jsx'

export default function SidebarLeft() {
    return (
        <>
            <div class="left-sidebar">
                <SidebarProfileBox profileDetails={profileDetails} sideProfileLink={sideProfileLink} />
                <div>
                    <div class="sidebar-activity">
                        <InfoCard heading="Recent" list={recents} />
                        <InfoCard heading="Groups" list={groups} />
                    </div>
                </div>
            </div>
        </>
    )
}
