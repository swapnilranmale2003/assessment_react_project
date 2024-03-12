import React from 'react'
import './Button.css'
function Button(props) {
  return (
    <div>
      <button className='send-btn'>{props.name}</button>
    </div>
  )
}

export default Button
