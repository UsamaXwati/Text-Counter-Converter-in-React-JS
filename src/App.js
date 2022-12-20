import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React, {useState} from 'react'

function App() {
  const [mode, setmode] = useState('light')

  const toggleMode =()=>{
    if (mode==='dark') {
        setmode('light')
        document.body.style.backgroundColor='white'
    }
    else{
      setmode('dark')
      document.body.style.backgroundColor='black'
    }
  }
  return (
    <>
        {/* <Navbar /> */}
      <Navbar title="Text Counter & Converter" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        {/* <TextForm/> */}
        <TextForm heading="Enter the Text to Analyze below" mode={mode}/>
      </div>
    </>
  );
}

export default App;
