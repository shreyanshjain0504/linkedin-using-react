import React from 'react'
import downArrow from '../../assets/down-arrow.png'
import { Link } from 'react-router-dom';

export default function SortDisplay({ postArray, setPostArray }) {
    const sortByDateAsc = () => {
        let updatedArray = [...postArray];
        updatedArray.sort((a, b) => new Date(a.time) - new Date(b.time));
        setPostArray(updatedArray);
    };

    const sortByDateDesc = () => {
        let updatedArray = [...postArray];
        updatedArray.sort((a, b) => new Date(b.time) - new Date(a.time));
        setPostArray(updatedArray);
    };

  return (
    <>
        <p>Sort by: <span>
            <div class="dropdown">
                top <img src={downArrow} />
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
