// Button.js
import React from 'react';
import './Button.css';

function Button(props) {
  const { onClick, name } = props;

  return (
    <div>
      <button className='send-btn' onClick={onClick}>
        {name}
      </button>
    </div>
  );
}

export default Button;
