import React from 'react'
import './InputArea.css';
export const InputArea = (props) => {
  return (
    <div className='input-container container-fluid d-flex'>
        <p>{props.input}</p>
    </div>
  )
}
