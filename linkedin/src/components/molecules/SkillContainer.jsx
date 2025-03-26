import React from 'react'
import _ from 'lodash'
import Skill from '../atoms/Skill';

export default function SkillContainer({ skills }) {
    return (
        <div className="skills">
            {_.map(skills, (skill, index) => (
                <Skill key={index} skill={skill} />
            ))}
        </div>
    );
}
