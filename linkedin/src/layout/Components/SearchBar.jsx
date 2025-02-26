import React from 'react'
import search from '../../assets/search.png'

export default function SearchBar({ List, inputText, setInputText, toggle }) {
  return (
    <>
        <div className="search-box">
            <img src={search} alt="Search" className="search-icon" />                   
            <input type="text" placeholder="Search..." id="search-box" name="search" onClick={toggle} value={inputText} onChange={e => setInputText(e.target.value)} />
            <div className="profile-menu-wrap1" id="profileMenu1">
                <div className="profile-menu1">
                    <div className="user-info1">
                        <List input={inputText} />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
} 
