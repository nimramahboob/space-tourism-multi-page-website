import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Destination from './pages/destination/Destination'
import Home from './pages/Home'
import Technology from './pages/technology/Technology'
import Crew from './pages/crew/Crew'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='destination' element={<Destination />} />
          <Route path='crew' element={<Crew />} />
          <Route path='technology' element={<Technology />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

//  {/* <Route path='/destination' element={<Destination />}> */}
//  <Route path='destination' element={<Destination />} />
//  {/* <Route path=':title' element={<SingleDestination />} />
// </Route> */}