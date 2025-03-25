import React from 'react'
import { Link } from 'react-router-dom';

export default function Skill({ index, skill }) {
    return (
        <>
            <Link to='#' key={index} className='skill-btn'>{skill.name}</Link>
        </>
    )
}