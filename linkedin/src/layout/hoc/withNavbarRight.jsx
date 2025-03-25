import React from 'react'

export function WithNavbarRight(NavbarRight) {
    return () => {
        function toggleMenu() {
            /* adds and removes the class name open-menu whenever called */
            const profileMenu = document.querySelector(".profile-menu-wrap");
            profileMenu.classList.toggle("open-menu");
        }
        return <NavbarRight toggleMenu={toggleMenu} />
    }
}

export default WithNavbarRight