import React from 'react';
import Button from '../atoms/Button.jsx';
import EducationContainer from '../organisms/EducationContainer.jsx';
import ExperienceContainer from '../organisms/ExperienceContainer.jsx';

const ProfileSectionItem = ({
  title,
  buttonText,
  arrayData,
  onRemove,
  onAddClick,
  formType,
}) => {
  return (
    <div className="profile-description">
      <h2>{title}</h2>
      <Button
        className="add-btn btn-open-popup"
        value={formType}
        onClick={onAddClick}
        textContent={buttonText}
      />
      {title === 'Experience' ? (
        <ExperienceContainer experienceArray={arrayData} onRemove={onRemove} />
      ) : (
        <EducationContainer educationArray={arrayData} onRemove={onRemove} />
      )}
    </div>
  );
};

export default ProfileSectionItem;
