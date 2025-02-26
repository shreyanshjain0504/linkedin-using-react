import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar.jsx'
import { experience, education } from '../utils/displayLists.jsx'
import { ExperienceContainer } from '../Components/Experience.jsx'
import { EducationContainer } from '../Components/Education.jsx'
import Input from '../atoms/Input.jsx'
import Label from '../atoms/Label.jsx'
import About from '../Components/About.jsx'
import Button from '../atoms/Button.jsx'
import ProfileSection from '../Components/ProfileSection.jsx'
import togglePopup from '../helpers/togglePopUp.jsx'
import useSetValue from '../atoms/UseSetValues.jsx'
import SkillSection from '../Components/SkillSection.jsx'

export default function Profile() {
    const [experienceArray, setExperienceArray] = useState(localStorage.getItem('experience') ? JSON.parse(localStorage.getItem('experience')) : experience);
    const [educationArray, setEducationArray] = useState(localStorage.getItem('education') ? JSON.parse(localStorage.getItem('education')) : education);
    const formTypeObj = useSetValue('experience')
    const [formData, setFormData] = useState({
        position: "",
        company: "",
        from: "",
        to: "",
        desc: "",
    });

    function change(type) {
        formTypeObj.onChange(type);
        setFormData({
            position: "",
            company: "",
            from: "",
            to: "",
            desc: "",
        });
        togglePopup();
    }

    useEffect(() => {
        saveData()
    }, [educationArray, experienceArray]);

    const saveData = () => {
        localStorage.setItem('experience', JSON.stringify(experienceArray));
        localStorage.setItem('education', JSON.stringify(educationArray));
    };

    const loadDataExperience = () => {
        const savedExperience = localStorage.getItem("experience");
        return savedExperience ? JSON.parse(savedExperience) : [];
    };

    const loadDataEducation = () => {
        const savedEducation = localStorage.getItem("education");
        return savedEducation ? JSON.parse(savedEducation) : [];
    };

    const createExperience = () => {
        const newExperience = {
            position: formData.position,
            company: formData.company,
            from: formData.from,
            to: formData.to,
            desc: formData.desc,
            type: "education",
            time: new Date().getTime(),
        };
    
        setExperienceArray((prevExperience) => [newExperience, ...prevExperience]); // Update State Properly
        setFormData({ position: "", company: "", from: "", to: "", desc: "" }); // Reset Form
        saveData();
        loadDataExperience();
    };

    const createEducation = () => {
        const newEducation = {
            position: formData.position,
            company: formData.company,
            from: formData.from,
            to: formData.to,
            desc: formData.desc,
            type: "education",
            time: new Date().getTime(),
        };
    
        setEducationArray((prevEducation) => [newEducation, ...prevEducation]); // Update State Properly
        setFormData({ position: "", company: "", from: "", to: "", desc: "" }); // Reset Form
        saveData();
        loadDataEducation();
    };


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formTypeObj.value === "education") {
            createEducation();
        } else {
            createExperience();
        }
        togglePopup();
    };

    return (
        <>
            <Navbar />

            {/* <!-- Form layout --> */}
            <div id="popupOverlay" className="overlay-container">
                <div className="popup-box">
                    <form className="form-container" onSubmit={handleSubmit}>
                        <Label htmlFor="position" value={Object.value === "education" ? "Branch" : "Position"} />
                        <Input placeholder={formTypeObj.value === "education" ? "Enter your Branch" : "Enter your Position"} id="position" name="position" value={formData.position} onChange={handleChange}/>

                        <Label htmlFor="company" value={formTypeObj.value === "education" ? "College" : "Company"} />
                        <Input placeholder={formTypeObj.value === "education" ? "Enter your College" : "Enter your Company"} id="company" name="company" value={formData.company} onChange={handleChange}/>

                        <Label htmlFor="from" value="From" />
                        <Input placeholder="From" id="from" name="from" value={formData.from} onChange={handleChange}/>

                        <Label htmlFor="to" value="To" />
                        <Input placeholder="To" id="to" name="to" value={formData.to} onChange={handleChange}/>

                        <Label htmlFor="desc" value="Description" />
                        <Input placeholder="Description" id="desc" name="desc" value={formData.desc} onChange={handleChange}/>
                        
                        <div className="btn-collection">
                            <Button className="btn-submit" value={formTypeObj.value === "education" ? "Add Education" : "Add Experience"} />
                        </div>
                    </form>

                    <Button className="btn-close-popup" onClick={togglePopup} value="Close" />
                </div>
            </div>

            <div className="container">
                <div className="profile-main">
                    <ProfileSection mutuals={1} />

                    <About />

                    <div className="profile-description">
                        <h2>Experience</h2>
                        <Button className="add-btn btn-open-popup" onClick={() => {
                            formTypeObj.onChange('experience')
                            change('experience')
                        }} value='Add Experience' />
                        <ExperienceContainer experience={experienceArray} />
                    </div>

                    <div className="profile-description">
                        <h2>Education</h2>
                        <Button className="add-btn btn-open-popup" onClick={() => {
                            formTypeObj.onChange('education')
                            change('education')
                        }} value='Add Education' />
                        <EducationContainer education={educationArray} />
                    </div>

                    <SkillSection />
                </div>
            </div>
        </>
    )
}