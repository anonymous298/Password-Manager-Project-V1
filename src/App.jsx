import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PasswordManager from './components/PasswordManager'
import { contextState } from './context/context'
import React from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  const [passwordObj, setPasswordObj] = useState([])
  
  return (
    <div className='h-[100vh] flex flex-col justify-between'>
      <contextState.Provider value={{passwordObj, setPasswordObj}}>

        <Navbar />

        <PasswordManager />

        <Footer />

        <ToastContainer />

      </contextState.Provider>
    </div>
  )
}

export default App
