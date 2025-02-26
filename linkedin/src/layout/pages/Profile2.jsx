import React, { useState, useEffect, createRef } from 'react'
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

class Form extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            // formType: '', 
            experienceArray: (localStorage.getItem('experience') ? JSON.parse(localStorage.getItem('experience')) : experience), 
            educationArray: (localStorage.getItem('education') ? JSON.parse(localStorage.getItem('education')) : education),
            formData: {
                position: "",
                company: "",
                from: "",
                to: "",
                desc: "",
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.change = this.change.bind(this)
    }

    handleChange = (e) => {
        const { name, value } = e?.target;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.formType === "education") {
            this.createEducation();
        } else {
            this.createExperience();
        }
        togglePopup();
    };
    
    change(e) {
        const text = e?.target?.textContent
        this.setState({ formType: (text == 'Add Education' ? 'education' : 'experience') })
        togglePopup();
    }

    componentDidUpdate() {
        this.loadDataEducation()
        this.loadDataExperience()
    }
    
    saveData() {
        localStorage.setItem('experience', JSON.stringify(this.state.experienceArray));
        localStorage.setItem('education', JSON.stringify(this.state.educationArray));
    };
    
    loadDataExperience = () => {
        const savedExperience = localStorage.getItem("experience");
        return savedExperience ? JSON.parse(savedExperience) : [];
    };
    
    loadDataEducation = () => {
        const savedEducation = localStorage.getItem("education");
        return savedEducation ? JSON.parse(savedEducation) : [];
    };
    
    createExperience = () => {
        console.log('exp created!')
        const newExperience = {
            ...this.state.formData,
            type: this.state.formType,
            time: new Date().getTime(),
        };
        
        this.setState(prevState => ({
            experienceArray: [newExperience, ...prevState.experienceArray],
            formData: { position: '', company: '', from: '', to: '', desc: '' }
        }), () => {
            this.saveData()
        })
    };
    
    createEducation = () => {
        console.log('ed created!')
        const newEducation = {
            ...this.state.formData,
            type: this.state.formType,
            time: new Date().getTime(),
        };
    
        this.setState(prevState => ({
            educationArray: [newEducation, ...prevState.educationArray],
            formData: { position: '', company: '', from: '', to: '', desc: '' }
        }), () => {
            this.saveData()
        })
    };

    removeExperience = (index) => {
        this.setState(prevState => {
            const experienceArray = [...prevState.experienceArray];
            experienceArray.splice(index, 1);
            return { experienceArray };
        }, this.saveData);
    }

    removeEducation = (index) => {
        this.setState(prevState => {
            const educationArray = [...prevState.educationArray];
            educationArray.splice(index, 1);
            return { educationArray };
        }, this.saveData);
    }

    getExperienceArray = () => {
        return this.state.experienceArray;
    };

    getEducationArray = () => {
        return this.state.educationArray;
    };

    render() {
        return (
            <div id="popupOverlay" className="overlay-container">
                <div className="popup-box">
                    <form className="form-container" onSubmit={this.handleSubmit}>
                        <Label htmlFor="position" value={this.props.formType === "education" ? "Branch" : "Position"} />
                        <Input placeholder={this.props.formType === "education" ? "Enter your Branch" : "Enter your Position"} id="position" name="position" value={this.state.formData.position} onChange={this.handleChange}/>

                        <Label htmlFor="company" value={this.props.formType === "education" ? "College" : "Company"} />
                        <Input placeholder={this.props.formType === "education" ? "Enter your College" : "Enter your Company"} id="company" name="company" value={this.state.formData.company} onChange={this.handleChange}/>

                        <Label htmlFor="from" value="From" />
                        <Input placeholder="From" id="from" name="from" value={this.state.formData.from} onChange={this.handleChange}/>

                        <Label htmlFor="to" value="To" />
                        <Input placeholder="To" id="to" name="to" value={this.state.formData.to} onChange={this.handleChange}/>

                        <Label htmlFor="desc" value="Description" />
                        <Input placeholder="Description" id="desc" name="desc" value={this.state.formData.desc} onChange={this.handleChange}/>
                        
                        <div className="btn-collection">
                            <Button className="btn-submit" value={this.props.formType == "education" ? "Add Education" : "Add Experience"} onClick={(e) => {
                                this.handleSubmit(e)
                            }} />
                        </div>
                    </form>

                    <Button className="btn-close-popup" onClick={togglePopup} value="Close" />
                </div>
            </div>
        )
    }
}

export default class Profile extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            formType: ''
        }
    }

    handleChange(e) {
        this.setState({ formType: e.target.value })
    }

    render() {
        const profileInstance = new Form();
        const experienceArray = profileInstance.getExperienceArray();
        const educationArray = profileInstance.getEducationArray();
        return (
            <>
                <Navbar />
    
                <Form formType={this.state.formType} />
    
                <div className="container">
                    <div className="profile-main">
                        <ProfileSection mutuals={1} />
    
                        <About />
    
                        <div className="profile-description">
                            <h2>Experience</h2>
                            <button className="add-btn btn-open-popup" value='experience' onClick={e=>{
                                this.handleChange(e)
                                togglePopup()
                            }}>Add Experience</button>
                            <ExperienceContainer experience={experienceArray} />
                        </div>
    
                        <div className="profile-description">
                            <h2>Education</h2>
                            <button className="add-btn btn-open-popup" onClick={e=>{
                                this.handleChange(e)
                                togglePopup()
                            }} value='education' >Add Education</button>
                            <EducationContainer education={educationArray} />
                        </div>
    
                        <SkillSection />
                    </div>
                </div>
            </>
        )
    }
}