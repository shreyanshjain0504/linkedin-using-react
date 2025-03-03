import React, { useState } from 'react'
import Button from '../atoms/Button'

function About() {
  const text = "I am Shreyansh Jain, a Computer Science student at NIT Raipur from batch 2025. Currently working as Associate Software Engineer Intern at Tekion Corp working in the Accounting team as a FE Intern.";
  const [showMore, setShowMore] = useState(false) 
  return (
    <>
      <div className="profile-description">
        <h2>About</h2>
        <p>{showMore ? text : `${text.substring(0, 100)}`}</p>
        <Button onClick={() => setShowMore(!showMore)} value={!showMore ? "Show More..." : "Show Less"} />
      </div>
    </>
  )
}

export default About