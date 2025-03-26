import React from 'react'
import search from '../../assets/search.png'
import Input from '../atoms/Input'

export default function SearchBar({ List, inputText, setInputText, toggle, isSearchListOpen }) {
  return (
    <>
        <div className="search-box">
            <img src={search} alt="Search" className="search-icon" />                   
            <Input className='search' 
                    type="text" 
                    placeholder="Search..." 
                    value={inputText} 
                    id="search-box" 
                    name="search" 
                    onClick={toggle} 
                    onChange={e => setInputText(e.target.value)} 
            />
            {isSearchListOpen && 
                <div className="profile-menu-wrapper" id="profileMenu">
                    <div className="profile-search-menu">
                        <div className="user-search-info">
                            <List input={inputText} />
                        </div>
                    </div>
                </div>
            }
        </div>
    </>
  )
} 
