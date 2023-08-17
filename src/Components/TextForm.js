import React, {useState} from 'react'

export default function TextForm(props) {

    const handleClearClick = () =>{
        let newText = " ";
        setText(newText);
        props.showAlert("Everything is cleared", "danger")
    }

    const handleCapFClick = () =>{
        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText);
        props.showAlert("The first letter in now capitalize", "success")
    }
     
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Everything is converted to uppercase", "success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase ();
        setText(newText)
        props.showAlert("Everything is converted to lower case", "success")
    } 

    const handleOnChange = (event) => {
        setText(event.target.value)
    
    }
    const [text, setText]= useState(""); 
  return (
    <>
    <div className='container' style={{color: props.mode==="dark"?"white":"#042743"}}>
        <h1 className='heading my-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==="light"?"white":"#042743", color: props.mode==="dark"?"white":"#042743"}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-outline-success mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-outline-success mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-outline-success mx-1" onClick={handleCapFClick}>Capitalize the First letter</button>
        <button className="btn btn-outline-danger mx-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className='container my-2' style={{color: props.mode==="dark"?"white":"#042743"}} >
        <h2>Your Text Summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p> {60*0.008* text.split(" ").length} seconds read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter the text above to review"}</p>
    </div>
    </>
  )
}
