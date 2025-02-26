import React from 'react'
import { Link } from 'react-router-dom';

const Skill = ({ index, skill }) => {
    return (
        <>
            <Link to='#' key={index} className='skill-btn'>{skill.name}</Link>
        </>
    )
}

const SkillContainer = ({ skills }) => {
    return (
        <div className="skills">
            {skills.map((skill, index) => (
                <Skill key={index} skill={skill} />
            ))}
        </div>
    );
}

export { Skill, SkillContainer };