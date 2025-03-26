import React, { useState } from 'react';
import Navbar from '../templates/Navbar.jsx';
import ProfileSectionItem from '../templates/ProfileSectionItem.jsx';
import ProfileSection from '../templates/ProfileSectionMain.jsx';
import SkillSection from '../templates/SkillSection.jsx';
import Form from '../templates/Form.jsx';
import saveData from '../helpers/saveData.js';
import About from '../templates/About.jsx';
import _ from 'lodash'

const Profile = () => {
  const [formType, setFormType] = useState('');
  const [toggle, setToggle] = useState(false);

  const [experienceArray, setExperienceArray] = useState(
    JSON.parse(localStorage.getItem('experience')) || []
  );
  const [educationArray, setEducationArray] = useState(
    JSON.parse(localStorage.getItem('education')) || []
  );

  const updateExperience = (newExperienceArray) => {
    setExperienceArray(newExperienceArray);
  };

  const updateEducation = (newEducationArray) => {
    setEducationArray(newEducationArray);
  };

  const handleClick = (e) => {
    setFormType(e.target.value);
    setToggle(true);
  };

  const onRemove = (id, type) => {
    if (type === 'experience') {
      const updatedExperienceArray = _.filter(experienceArray, exp => {
        return exp.time !== id
      });
      setExperienceArray(updatedExperienceArray);
      saveData(type, JSON.stringify(updatedExperienceArray));
    } else if (type === 'education') {
      const updatedEducationArray = _.filter(educationArray, ed => {
        return ed.time !== id
      });
      setEducationArray(updatedEducationArray);
      saveData(type, JSON.stringify(updatedEducationArray));
    }
  };

  return (
    <>
      <Navbar />

      {toggle && (
        <Form
          formType={formType}
          toggle={toggle}
          setToggle={setToggle}
          updateExperience={updateExperience}
          updateEducation={updateEducation}
        />
      )}

      <div className="container">
        <div className="profile-main">
          <ProfileSection />

          <About />

          <ProfileSectionItem
            title="Experience"
            buttonText="Add Experience"
            formType="experience"
            arrayData={experienceArray}
            onRemove={onRemove}
            onAddClick={handleClick}
          />

          <ProfileSectionItem
            title="Education"
            buttonText="Add Education"
            formType="education"
            arrayData={educationArray}
            onRemove={onRemove}
            onAddClick={handleClick}
          />

          <SkillSection />
        </div>
      </div>
    </>
  );
};

export default Profile;