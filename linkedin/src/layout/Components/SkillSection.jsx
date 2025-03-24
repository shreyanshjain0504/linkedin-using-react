import React, { useState, useEffect } from 'react';
import { SkillContainer } from './Skills';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { skills } from '../utils/displayLists';
import saveData from '../helpers/saveData';

function SkillSection() {
    const [skillsArray, setSkillsArray] = useState(localStorage.getItem('skills') 
                            ? JSON.parse(localStorage.getItem('skills')) 
                            : skills);
    const [skill, setSkill] = useState(''); 

    const createSkill = () => {
        if (!skill.trim()) {
            alert("Enter a skill first!");
            return;
        }
        
        const newSkillObj = { name: skill };
        const updatedSkillsArray = [...skillsArray, newSkillObj];
        
        setSkillsArray(updatedSkillsArray); 
        const key = 'skills'
        const value = JSON.stringify(updatedSkillsArray)
        saveData(key, value);
        setSkill('');  
    };

    const handleChange = (e) => {
        setSkill(e.target.value)
    }

    useEffect(() => {   
        saveData();
    }, [skillsArray]);

    return (
        <>
            <div className="profile-description">
                <h2>Skills</h2>
                <div className="skills-input">
                    <Input
                        type="text"
                        className="input-for-skills"
                        value={skill}  
                        onChange={handleChange}  
                    />
                    <Button className="add-skills" 
                        onClick={createSkill} 
                        textContent='+' 
                    />
                </div>

                <SkillContainer skills={skillsArray} />
            </div>
        </>
    );
}

export default SkillSection;
