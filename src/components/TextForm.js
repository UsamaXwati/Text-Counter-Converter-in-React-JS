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
        console.log("Clear Button Clicked");
        let newText = "";
        setText(newText)
    }
    
 const handleMakeClick = ()=>{
    let newText = '';
    let arr = text.split(" ");
     console.log(arr);       

    arr.forEach(myFunc);
    function myFunc(item) {
        var c = item.charAt(0);
        newText+=c;
    } 
            
   setText(newText);
}


    const speak = () => {
        console.log("Speak Button Clicked");
        let check = text.length;
        if(check!=0)
        {
            let msg = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(msg);
            const toogle = document.getElementById('toggle')
            if (toogle.textContent == "Speak") {
                toogle.innerHTML = "Stop"
            }
            else {
                toogle.innerHTML = "Speak"
                if (toogle.innerHTML = "Speak"){
                    window.speechSynthesis.cancel()
                }
            }

        }
        else{
            alert('No text to Speak');
            window.speechSynthesis.cancel()
        }

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
        <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">  
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'?'#383839':'white', color: props.mode=='light'?'white':'#383839'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Covert to Lowercase</button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className=" btn btn-success mx-1" onClick={copyToClipboard}>Copy</button>
        <button className=" btn btn-primary mx-1" onClick={handleMakeClick}>Get First Characters</button>
        
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>


    </div>
    <div className="container my-3 text-center" style={{color: props.mode==='light'?'#383839':'white'}}>
        <h3 my-1 >Text Summary</h3>   
        <p>{text.trim() === '' ? 0 : text.split(" ").length} words and {text.length} Characters</p>
    </div>
    <div className="container my-3 text-center" style={{color: props.mode==='light'?'#383839':'white'}}>
        <h3>Preview:</h3>
        <div className="mb-3">  
            <textarea className="form-control"  ref={textAreaRef} value={text.length>0?text:'Enter something in above text area to preview'} id="myBox" rows="8"></textarea>
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