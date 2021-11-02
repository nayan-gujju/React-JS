import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Student from './components/Student';

const a = "a";

function App() {
  const [mode, setmode] = useState('light'); //Whether dark mode is enabled or not 
  const toggleMode = () =>{
    if (mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  } 

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} />
    <Student/>
    <div className="container-lg">
    <TextForm heading="Enter the text"/>
    </div>
    </>
  );
}

export default App;

export {a};