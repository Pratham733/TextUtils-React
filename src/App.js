/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    },2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showalert("Dark mode has been enabled","success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
            showalert("Light mode has been enabled","success")

    }
  }
  return (
    <>    
      {/* <NavBar title="NavBar2" home="My Home" /> */}
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={ alert} />
      <div className="container my-3" >
      <TextForm showalert={showalert} heading="Enter the heading here" mode={mode}/>
      <About/>
      </div>
      </>

  );
}

export default App;
