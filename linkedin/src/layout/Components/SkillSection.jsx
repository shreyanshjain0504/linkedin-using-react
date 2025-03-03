import React, { useState, useEffect } from 'react'
import { SkillContainer } from './Skills'
import Input from '../atoms/Input'
import useSetValue from '../atoms/UseSetValues';
import Button from '../atoms/Button';
import { skills } from '../utils/displayLists';

function SkillSection() {
    const [skillsArray, setSkillsArray] = useState(localStorage.getItem('skill') ? JSON.parse(localStorage.getItem('skill')) : skills);
    const skillObj = useSetValue('')

    const createSkill = () => {
        if (!skillObj.value.trim()) {
            alert("Enter a skill first!");
            return;
        }
        
        const newSkillObj = { name: skillObj.value };
        const updatedSkills = [...skillsArray, newSkillObj];
        
        setSkillsArray(updatedSkills); // Update state
        saveData();
        skillObj.onChange("");
        loadDataSkills();
    };
    
    const saveData = () => {
        localStorage.setItem('skill', JSON.stringify(skillsArray));
    };
    
    const loadDataSkills = () => {
        const savedSkills = localStorage.getItem("skill");
        return savedSkills ? JSON.parse(savedSkills) : [];
    };

    useEffect(() => {   
        saveData()
        loadDataSkills()
    }, [skillsArray])
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

export default SkillSection