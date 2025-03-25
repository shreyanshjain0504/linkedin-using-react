import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SkillContainer from '../molecules/SkillContainer';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { addSkill, setSkills } from '../redux/Actions/actions'; 
import saveData from '../helpers/saveData';

function SkillSection() {
    const dispatch = useDispatch();
    const skillsArray = useSelector((state) => state.skills);
    const [skill, setSkill] = useState('');

    const createSkill = () => {
        if (!skill.trim()) {
            alert('Enter a skill first!');
            return;
        }

        const newSkillObj = { name: skill };
        const updatedSkillsArray = [...skillsArray, newSkillObj];
        dispatch(addSkill(newSkillObj));
        const key = 'skills';
        const value = JSON.stringify(updatedSkillsArray);
        saveData(key, value);
        setSkill('');
    };

    const handleChange = (e) => {
        setSkill(e.target.value);
    };

    useEffect(() => {
        const savedSkills = localStorage.getItem('skills')
            ? JSON.parse(localStorage.getItem('skills'))
            : [];
        
        if (savedSkills.length > 0) {
            dispatch(setSkills(savedSkills));
        }
    }, [dispatch]);

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
                    <Button
                        className="add-skills"
                        onClick={createSkill}
                        textContent="+"
                    />
                </div>

                <SkillContainer skills={skillsArray} />
            </div>
        </>
    );
}

export default SkillSection;