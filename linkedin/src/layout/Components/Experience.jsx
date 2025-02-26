import React from 'react'
import logo from '../../assets/logo.png'

const Experience = ({ exp }) => {
  return (
    <>
        <div className="profile-desc-row" id={exp.time}>
            <img src={logo} height="120px" alt={exp.company} />
            <div>
                <h3>{exp.company}</h3>
                <b>{exp.position}</b>
                <b>{exp.from} - {exp.to}</b>
                <p>{exp.desc}</p>
                <hr />
            </div>
            <button className="remove-btn" dataId={exp.time}  onClick={() => {
                let expArray = JSON.parse(localStorage.getItem('experience'))
                let updatedArray = expArray.filter(item => item.time != exp.time)
                localStorage.setItem('experience', JSON.stringify(updatedArray))
            }}>Remove</button>
        </div>
    </>
  )
}

const ExperienceContainer = ({ experience }) => {
    return (
        <>
            <div className="experience">
                {experience.map(exp => <Experience exp={ exp }/>)}
            </div>
        </>
    )
}


export { Experience, ExperienceContainer };