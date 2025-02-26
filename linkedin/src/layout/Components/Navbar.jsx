import React, { useState, useEffect } from 'react'
import 'react-dropdown/style.css';
import NavbarLeft from '../templates/NavbarLeft.jsx'
import NavbarCenter from '../templates/NavbarCenter.jsx'
import NavbarRight from '../templates/NavbarRight.jsx'
import { headerLinks } from '../utils/displayLists.jsx';

export default function Navbar() {
    return (
        <div className='navbar'>
            <NavbarLeft />
            <NavbarCenter headerLinks={headerLinks} />
            <NavbarRight />
        </div>
    )
}