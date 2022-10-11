import React from 'react'
import './Footer.css';
export default function Footer() {
    let currYear=new Date().getFullYear();
  return (
    <div className='footer bg-dark text-white p-2 w-100 text-center'>
        <h4>CopyRight&copy; {currYear} </h4>
    </div>
  )
}
