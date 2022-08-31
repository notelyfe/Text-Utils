import Navbar from './Components/Navbar'
import About from './Components/About'
import TextForm from './Components/TextForm'
import Alert from './Components/Alert'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [mode, setMode] = useState('light')

  const theme = () => {
    if(mode === 'dark'){
      setMode('light')
      showAlert("Light mode has been enable", "success")
    }
    else{
      setMode('dark')
      showAlert("Dark mode has been enable", "success")
    } 
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, alertType) => {
    setAlert({
      msg: message,
      type: alertType
    })
    
    setTimeout(() => {
      setAlert('')
    }, 1500);
  }

  return (
    <Router>
      <Navbar theme={theme} mode={mode} />
      <Alert alert={alert}/>
      <div className={`bg-${mode}`} style={{ height: "100vh", marginTop:"-48px"}}>
        <Routes>
          <Route path='/' element={<TextForm theme={theme} mode={mode} showAlert={showAlert}/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
