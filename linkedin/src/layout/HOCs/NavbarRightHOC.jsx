import React from 'react'

export function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
        function toggleMenu() {
            /* adds and removes the class name open-menu whenever called */
            let profileMenu = document.querySelector(".profile-menu-wrap");
            profileMenu.classList.toggle("open-menu");
        }
        return <OriginalComponent toggleMenu={toggleMenu} />
    }
    return NewComponent;
}

export default UpdatedComponent;