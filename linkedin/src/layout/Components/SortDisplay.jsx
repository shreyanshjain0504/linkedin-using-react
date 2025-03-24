import React from 'react'
import downArrow from '../../assets/down-arrow.png'
import { Link } from 'react-router-dom';
import saveData from '../helpers/saveData';

export default function SortDisplay() {
    const key = 'filter'
    
    const sortByDateAsc = () => {
        const postArray = localStorage.getItem('allPosts') ? JSON.parse(localStorage.getItem('allPosts')) : []
        postArray.sort((a, b) => new Date(a.time) - new Date(b.time));
        const value = JSON.stringify(postArray)
        saveData(key, value)
        return postArray
    };
    
    const sortByDateDesc = () => {
        const postArray = sortByDateAsc()
        postArray.reverse()
        const value = JSON.stringify(postArray)
        saveData(key, value)
        return postArray
    };

    return (
        <>
            <p>Sort by: 
                <span>
                    <div class="dropdown">
                        top 
                        <img src={downArrow} alt="downArrow" />
                        <div class="dropdown-content">
                            <Link to="#" onClick={sortByDateAsc}>Asc</Link>
                            <Link to="#" onClick={sortByDateDesc}>Desc</Link>
                        </div>
                    </div>
                </span>
            </p>
        </>
    )
}
