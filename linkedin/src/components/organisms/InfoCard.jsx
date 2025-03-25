import React from 'react';
import IconLink from '../molecules/IconLink.jsx';
import _ from 'lodash';

export default function InfoCard({ heading, list }) {
  return (
    <>
      <h3>{heading}</h3>
      {_.map(list, item => (
        <IconLink 
          key={`${item.imgLink}-${item.text}`} 
          imgLink={item.imgLink} 
          text={item.text} 
        />
      ))}
    </>
  );
}
