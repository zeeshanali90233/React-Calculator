import React from 'react'
import './Buttons.css';
import { InputArea } from './InputArea';
import { useState } from 'react';
import * as math from 'mathjs';
export const Buttons = () => {
    const [input,setInput]=useState("");
    
    const handleinput=(e)=>{
        if(e.target.textContent==='='){
            setInput(eval(input));
        }
        else{
            setInput(input+e.target.textContent);
        }
    }
    
    const clearInput=()=>{
        setInput("");
    }
  return (
    <div className='calc-container'>
        <div className="btn-wrapper">
            <div className="row">
                    <InputArea input={input}/>
            </div>
            <div className="row flex">
                <button className='calc-btn' onClick={handleinput} >7</button>
                <button className='calc-btn' onClick={handleinput} >8</button>
                <button className='calc-btn' onClick={handleinput} >9</button>
                <button className='calc-btn operator' onClick={handleinput} >/</button>
            </div>
            <div className="row flex">
                <button className='calc-btn' onClick={handleinput} >4</button>
                <button className='calc-btn' onClick={handleinput} >5</button>
                <button className='calc-btn' onClick={handleinput} >6</button>
                <button className='calc-btn operator' onClick={handleinput} >*</button>
            </div>
            <div className="row flex">
                <button className='calc-btn' onClick={handleinput} >1</button>
                <button className='calc-btn' onClick={handleinput} >2</button>
                <button className='calc-btn' onClick={handleinput} >3</button>
                <button className='calc-btn operator' onClick={handleinput} >+</button>
            </div>
            <div className="row flex">
                <button className='calc-btn' onClick={handleinput} >.</button>
                <button className='calc-btn' onClick={handleinput} >0</button>
                <button className='calc-btn' onClick={handleinput} >=</button>
                <button className='calc-btn operator' onClick={handleinput} >-</button>
            </div>

            <div className="row flex">
                <button className='clear-btn' onClick={clearInput}>Clear</button>
            </div>
        </div>
    </div>
  )
}
