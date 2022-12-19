import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

function App() {
  return (
    <>
        {/* <Navbar /> */}
      <Navbar title="Text Counter & Converter  " aboutText="About US"/>
      <div className="container my-3">
        {/* <TextForm/> */}
        <TextForm heading="Enter the Text to Analyze below"/>
      </div>
    </>
  );
}

export default App;
