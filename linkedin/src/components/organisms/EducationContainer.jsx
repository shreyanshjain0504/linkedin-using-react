import React from 'react';
import _ from 'lodash'
import Education from '../molecules/Education';

export default function EducationContainer({ educationArray, onRemove }) {
    return (
      <div className="education-container">
        {educationArray.length > 0 ? (
          _.map(educationArray, (ed) => (
            <Education 
              key={ed.time} 
              ed={ed} 
              onRemove={onRemove} 
            />
          ))
        ) : (
          <p>No education added yet.</p>
        )}
      </div>
    );
};