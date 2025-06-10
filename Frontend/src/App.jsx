import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from './components/Layouts/HomeLayout'
import About from './components/About'
import Homepage from './components/Homepage'
import Vans from './components/Vans/Vans'
import VanDetails from './components/Vans/VanDetails'
import HostLayout from './components/Layouts/HostLayout'
import Dashboard from './components/Host/Dashboard'
import Income from './components/Host/INcome'
import HostVans from './components/Host/HostVans'
import Reviews from './components/Host/Reviews'
import Signin from './components/Signin'
import HostVanDetails from './components/Host/HostVanDetails'
import ListNewVan from './components/Host/ListNewVan'
import AuthRequired from './components/AuthRequired'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={< HomeLayout />}>
          <Route index element={<Homepage />}/>
          <Route path='about' element={<About />}/>
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetails />} />
          <Route path='signin' element={<Signin />} />

          <Route element={<AuthRequired />}>  
            <Route path='host' element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='reviews' element={<Reviews />} />
              <Route path='vans' element={<HostVans />} />
              <Route path='vans/:id' element={<HostVanDetails />} />
              <Route path='vans/listnew' element={<ListNewVan />} />
            </Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
