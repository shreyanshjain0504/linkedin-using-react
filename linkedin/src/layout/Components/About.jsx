import React, { useState } from 'react'
import UpdatedComponent from '../HOCs/AboutHOC'
import Button from '../atoms/Button'

function About({ text, showMore, setShowMore }) {
  return (
    <>
        <div className="profile-description">
            <h2>About</h2>
            <p>{showMore ? text : `${text.substring(0, 100)}`}</p>
            <Button onClick={() => setShowMore(!showMore)} value={!showMore ? "Show More..." : "Show Less"}/>
        </div>
    </>
  )
}

export default UpdatedComponent(About)