import React, { useEffect, useState } from 'react'
import IconLink from '../molecules/IconLink.jsx';
import UpdatedComponent from '../HOCs/NavbarLeftHOC.jsx';
import SearchBar from '../Components/SearchBar.jsx';
import { LOGO } from '../Constants/Constants.jsx';

function NavbarLeft({ List, inputText, toggle, setInputText }) {
    return (
        <>
            <div className="navbar-left">
                <IconLink className="logo" imgLink={LOGO} />
                <SearchBar List={List} inputText={inputText} setInputText={setInputText} toggle={toggle} />
            </div>
        </>
    )
}

export default UpdatedComponent(NavbarLeft)