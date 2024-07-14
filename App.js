import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
// import About from "./component/About";
import React, { useState } from "react";
import Alert from "./component/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#17153B";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Textutils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ECFFE6";
      showAlert("Light Mode has been enabled", "success");
      document.title = "Textutils-light Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="Textutils"    mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <TextForm heading="Enter the Text to Analyze below" showAlert={showAlert} mode={mode}/> */}
          {/* <Routes> */}
            {/* /users --->comp1
            /users/name -->compo1 */}
          {/* <Route exact path="about" element={<About />} />
         <Route exact path="/" element={ */}
              <TextForm
                heading="Enter the Text to Analyze below"
                showAlert={showAlert}
                mode={mode}
              />
              {/* } /> */}
              
            
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
