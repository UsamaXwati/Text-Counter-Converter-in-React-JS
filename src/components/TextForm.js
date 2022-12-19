import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("upper case was clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowClick = ()=>{
        console.log("Low Case was clicked")    
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick =  ()=>{
        console.log("Ascii Button Clicked");
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        setCopySuccess('Copied!');
      };
    
    const [text, setText] = useState('Enter Text Here');    
    const [copySuccess, setCopySuccess] = useState('Enter Text Here');    
    const textAreaRef = useRef(null);

    return (
    <>
    <div className="container text-center">
        <h1>{props.heading}</h1>
        <div className="mb-3">  
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Covert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3 text-center">
        <h3 my-1 >Text Summary</h3>   
        <p>{text.trim() === '' ? 0 : text.split(" ").length} words and {text.length} Characters</p>
    </div>
    <div className="container my-3 text-center">
        <h3>Preview:</h3>
        <div className="mb-3">  
            <textarea className="form-control"  ref={textAreaRef} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className=" btn btn-primary mx-1" onClick={copyToClipboard}>Copy</button>
    </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string
}

TextForm.defaultProps =
{
    heading: "Enter your Text Pleaj"
}