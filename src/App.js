
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'; 
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  // MODE STATE ....

  const [mode, setMode]= useState ("light")

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-secondary")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-info")
  }

  // TOOGLE FUNCTION...

  const toogleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-"+cls)
    if(mode === "light"){
      setMode ("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode is being enabled", "success")
    }else {
      setMode ("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is being enabled", "danger")
    }
  }

  // ALERT STATE...

  const [alert, setAlert] = useState(null)

  // ALERT METHOD...

   const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 2000);
   }

  return (
    <>
{/*     
    NAVBAR... */}
    {/* <Router> */}
    <Navbar title = "TextUtlis" aboutText= "About Us" homeText = "Home" mode={mode} toogleMode= {toogleMode}/>

    {/* ALERT... */}

    <Alert alert= {alert}/>
    <div className='container my-3'>
    {/* <Routes>
      <Route exact path='/about' element={<About />} />
      <Route exact path='/' 
      element={} /> */}
    {/* </Routes>
    // </div>  
    </Router> */}
    <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />
    </div>
    </>
  );
}

export default App;
