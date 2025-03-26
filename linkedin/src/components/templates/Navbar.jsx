import React from 'react'
import NavbarLeft from '../organisms/NavbarLeft.jsx'
import NavbarCenter from '../organisms/NavbarCenter.jsx'
import NavbarRight from '../organisms/NavbarRight.jsx'
import { headerLinks } from '../utils/displayLists.js';

export default function Navbar() {
    return (
        <div className='navbar'>
            <NavbarLeft />
            <NavbarCenter headerLinks={ headerLinks } />
            <NavbarRight />
        </div>
    )
}