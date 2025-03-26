import React from 'react'
import IconLink from '../molecules/IconLink.jsx';
import withNavbarLeft from '../hoc/withNavbarLeft.jsx'
import SearchBar from '../molecules/SearchBar.jsx';
import { LOGO } from '../constants/constants.js';

function NavbarLeft({ List, inputText, toggle, setInputText, isSearchListOpen }) {
    return (
        <>
            <div className="navbar-left">
                <IconLink className="logo" imgLink={LOGO} />
                <SearchBar List={List} inputText={inputText} setInputText={setInputText} toggle={toggle} isSearchListOpen={isSearchListOpen} />
            </div>
        </>
    )
}

export default withNavbarLeft(NavbarLeft)