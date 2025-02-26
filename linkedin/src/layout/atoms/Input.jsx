import React from 'react'

export default function Input({ className = 'form-input', type = 'text', placeholder, value, onChange, id }) {
  return (
    <>
        <input className={className} type={type} placeholder={placeholder} value={value} onChange={onChange} name={id} id={id} required/>
    </>
  )
}
