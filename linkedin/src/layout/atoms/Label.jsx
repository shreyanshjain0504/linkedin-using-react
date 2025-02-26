import React from 'react'

export default function Label({ className="form-label", htmlFor, value }) {
  return (
    <>
        <label className={className} htmlFor={htmlFor}>
            {value}
        </label>
    </>
  )
}
