import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from './components/Layouts/HomeLayout'
import About from './components/About'
import Homepage from './components/Homepage'
import Vans from './components/Vans/Vans'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={< HomeLayout />}>
          <Route index element={<Homepage />}/>
          <Route path='about' element={<About />}/>
          <Route path='vans' element={<Vans />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
