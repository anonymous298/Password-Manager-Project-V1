import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PasswordManager from './components/PasswordManager'
import { contextState } from './context/context'
import React from 'react';

import { ToastContainer } from 'react-toastify';

function App() {
  const [passwordObj, setPasswordObj] = useState([])
  
  useEffect(() => {
    const storedPasswords = JSON.parse(localStorage.getItem("passwords")) || [];
    console.log(storedPasswords)

    storedPasswords ? setPasswordObj(storedPasswords) : setPasswordObj([]);
  }, [])
  

  return (
    <>
      <div className='h-[100vh] flex flex-col justify-between'>
        <contextState.Provider value={{passwordObj, setPasswordObj}}>

          <Navbar />

          <PasswordManager />

          <Footer />


        </contextState.Provider>
      </div>

      <ToastContainer
        position="bottom-right"  // top-left, bottom-right, bottom-center etc.
        autoClose={1000}      // 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"       // "light" | "dark" | "colored"
      />
    </>
  )
}

export default App
