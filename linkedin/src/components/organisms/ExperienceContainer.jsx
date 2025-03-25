import React from 'react';
import _ from 'lodash'
import Experience from '../molecules/Experience';

export default function ExperienceContainer({ experienceArray, onRemove }) {
  return (
    <div className="experience-container">
      {experienceArray.length > 0 ? (
        _.map(experienceArray, (exp) => (
          <Experience 
            key={exp.time} 
            exp={exp} 
            onRemove={onRemove} 
          />
        ))
      ) : (
        <p>No experience added yet.</p>
      )}
    </div>
  );
};