import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import React, { useState } from "react";
import About from "./components/about";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default function App() {
  const[mode, setMode] = useState("light");
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert ({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor='#033073';
      showAlert("Dark Mode Enabled", "success")
    } else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled", "success")
    } 
  }

  return (
    <>
      <Router>  
           <Navbar title="TextMender" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert}/>
          <div className="container my-4">
            <Routes>
              <Route exact path="/" element={
              <TextForms  heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
              }/>
              <Route exact path="/about" element={<About mode={mode}/>}/>
            </Routes>
          </div>
      </Router>
    </>
  );
}
