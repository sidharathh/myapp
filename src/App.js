import { useState } from 'react';
import './App.css';
import About from './components/about';
import Navbar from './components/navbar';
import TextForm from './components/textForm';
// import alert from './components/alert';
import Alert from './components/alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light")
  const [alert,setAlert] = useState(null)

  const showAlert = (message,type) =>{

    setAlert({
      msg: message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000);

  }
  const toggleMode = () =>{
   if(mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor="grey"
    showAlert("Dark Mode is enabled","success")
   }else{
    setMode("light")
    document.body.style.backgroundColor="white"
    showAlert("Light Mode is enabled","success")
   }
  }
  return (
        <>
        <Router>
        <Navbar title="RaneHelp" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className='container my-3'>
        <Routes>
        <Route path="/" element={<TextForm />} />
        <Route path="/about" element={<About />} />
        </Routes>  
        {/* <About />  */}
        </div>
        </Router>
        </>
  );
}

export default App;
