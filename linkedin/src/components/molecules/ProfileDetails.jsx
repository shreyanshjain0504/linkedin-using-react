import React from 'react'
import PropTypes from 'prop-types';

export default function ProfileDetails({ profileActivity, profileMetrics }) {
  return (
    <>
        <li>
          <span>{ profileActivity }</span>
          <span className="col-two">{ profileMetrics }</span>
        </li>
    </>
  )
}

ProfileDetails.propTypes = {
  profileActivity: PropTypes.string.isRequired,
  profileMetrics: PropTypes.string.isRequired,
};