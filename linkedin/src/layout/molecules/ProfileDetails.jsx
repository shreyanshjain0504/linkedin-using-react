import React from 'react'

export default function ProfileDetails({ colOneDetails, colTwoDetails }) {
  return (
    <>
        <li>
          <span>{ colOneDetails }</span>
          <span className="col-two">{ colTwoDetails }</span>
        </li>
    </>
  )
}
