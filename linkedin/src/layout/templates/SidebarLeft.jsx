import React from 'react'
import { recents, groups, sideProfileLink, profileDetails } from '../utils/displayLists.js';
import InfoCard from './InfoCard.jsx'
import SidebarProfileBox from './SidebarProfileBox.jsx'
import user1 from '../../assets/user-1.png'
import coverPic from '../../assets/coverPic.png'

export default function SidebarLeft() {
    return (
        <>
            <div class="left-sidebar">
                <SidebarProfileBox user1={user1} coverPic={coverPic} name="Shreyansh Jain" role="ASE Intern" profileDetails={profileDetails} sideProfileLink={sideProfileLink} />
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
