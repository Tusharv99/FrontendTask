import { useState } from 'react'
import './App.css'
import Collections from './components/Collections'
import Footer from './components/Footer'
import Land from './components/Land'
import Market from './components/Market'
import Navbar from './components/Navbar'
import Sellers from './components/Sellers'
import Tranding from './components/Tranding'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
    <div className={darkMode ? 'dark' : ''}>
    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}  ></Navbar>
    <Land darkMode={darkMode} toggleDarkMode={toggleDarkMode} ></Land>
    <Tranding darkMode={darkMode} toggleDarkMode={toggleDarkMode} ></Tranding>
    <Sellers darkMode={darkMode} toggleDarkMode={toggleDarkMode} ></Sellers>
    <Market darkMode={darkMode} toggleDarkMode={toggleDarkMode} ></Market>
    <Collections darkMode={darkMode} toggleDarkMode={toggleDarkMode} ></Collections>
    <Footer darkMode={darkMode} toggleDarkMode={toggleDarkMode} ></Footer>
    </div>

    </>
  )
}

export default App
