import React, { useState, useEffect } from 'react'
import { SkillContainer } from './Skills'
import Input from '../atoms/Input'
import useSetValue from '../atoms/UseSetValues';
import Button from '../atoms/Button';
import { skills } from '../utils/displayLists';
import UpdatedComponent from '../HOCs/SkillSectionHOC';

function SkillSection({ createSkill, skillObj, skillsArray }) {
    return (
        <>
        <div className="profile-description">
            <h2>Skills</h2>
            <div style={{ float: "right", marginTop: "-30px" }}>
                <Input
                    type="text"
                    className="input-for-skills"
                    {...skillObj}
                />
                <Button className="add-skills" onClick={createSkill} value='+' />
            </div>

            <SkillContainer skills={skillsArray} />
        </div>
    </>
  )
}

export default UpdatedComponent(SkillSection)