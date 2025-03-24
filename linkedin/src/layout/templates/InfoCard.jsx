import React from 'react'
import IconLink from '../molecules/IconLink.jsx'

export default function InfoCard({ heading, list }) {
  return (
    <>
      <h3>{heading}</h3>
      {list.map(item =>
        <IconLink key={item.imgLink} imgLink={item.imgLink} text={item.text} />
      )}
    </>
  )
}
