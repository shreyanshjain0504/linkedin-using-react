import React from 'react'
import mit from '../../assets/mit.png'

const Education = ({ ed }) => {
  return (
    <>
        <div className="profile-desc-row" id={ed.time}>
            <img src={mit} height="120px" alt={ed.company} />
            <div>
                <h3>{ed.company}</h3>
                <b>{ed.position}</b>
                <b>{ed.from} - {ed.to}</b>
                <p>{ed.desc}</p>
                <hr />
            </div>
            <button className="remove-btn" dataId={ed.time}  onClick={() => {
                let edArray = JSON.parse(localStorage.getItem('education'))
                let updatedArray = edArray.filter(item => item.time != ed.time)
                localStorage.setItem('education', JSON.stringify(updatedArray))
            }}>Remove</button>
        </div>
    </>
  )
}

const EducationContainer = ({ education }) => {
    return (
        <>
            <div className="education">
                {education.map(ed => <Education ed={ ed }/>)}
            </div>
        </>
    )
}


export { Education, EducationContainer };