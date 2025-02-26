import React, { useState, useEffect } from 'react'
import { skills } from '../utils/displayLists';
import useSetValue from '../atoms/UseSetValues';

export function UpdatedComponent(OriginalComponent) {
    function NewComponent() {
        
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

        return <OriginalComponent skillObj={skillObj} skillsArray={skillsArray} createSkill={createSkill} />
    }
    return NewComponent;
}

export default UpdatedComponent;