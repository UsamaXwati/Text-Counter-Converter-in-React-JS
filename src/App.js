import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import React, {useState} from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert =(message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setalert(null)
    }, 1000);
  }

  const select = ()=>{
    // let choose = document.getElementById('color').value;
    document.body.style.backgroundColor = document.getElementById('color').value;;
  }

  const toggleMode =()=>{
    if (mode==='dark') {
        setmode('light')
        document.body.style.backgroundColor='white'
        showAlert("Light mode enabled","success")

    }
    else{
      setmode('dark')
      document.body.style.backgroundColor='black'
      showAlert("Dark mode enabled","success")
    }
  }
  return (
    <>
        {/* <Navbar /> */}
      <Navbar title="Text Counter & Converter"  select={select} aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <TextForm/> */}
        <TextForm heading="Enter the Text to Analyze below" showAlert={showAlert} mode={mode}/>
      </div>
    </>
  );
}

export default App;
