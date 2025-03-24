import React from 'react'

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
