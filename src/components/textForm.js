import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {
const [text,setText] = useState("");

const ConvertToUpperCase = ()=>{
    let newText = text.toUpperCase();
console.log("Button Clicked");
setText(newText)
};
const ConvertToLowCase = ()=>{
  let newText = text.toLowerCase();
console.log("Button Clicked");
setText(newText)
};
const handleOnchange = (event)=>{
setText(event.target.value)
};
  return (
    <>
    <div className='container'>
    <div className="mb-3">
    <label htmlFor="myBox" className="form-label">{props.heading}</label>
    <textarea className="form-control"onChange={handleOnchange} value={text} id="myBox" rows="8"></textarea>
  </div>
  <button className='btn btn-primary mx-2' onClick={ConvertToUpperCase}>Convert to Upper Case</button>
  <button className='btn btn-primary mx-2' onClick={ConvertToLowCase}>Convert to Low Case</button>

  </div>
  <div className='container my-3'>
    <label>My Summary of paragraph</label>
  <p>{text.split(" ").length} and {text.length} characters</p>
  <p>Minutes to read text is {0.008 * text.split(" ").length}</p>
  <h2>Preview</h2>
  <p>{text}</p>
  </div>
  </>
  )
}
