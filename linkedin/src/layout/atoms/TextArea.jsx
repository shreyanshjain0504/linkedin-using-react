import React from 'react'
import { USER_IMAGE } from '../constants/constants'

export default function TextArea({ text, setText }) {
  return (
    <>
        <div className="create-post-input">
            <img src={USER_IMAGE} />
            <textarea rows="2" value={text} onChange={(e) => setText(e.target.value)} placeholder="Write a post"></textarea>
        </div>
    </>
  )
}
