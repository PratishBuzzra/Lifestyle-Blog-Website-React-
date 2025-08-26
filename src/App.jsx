import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'


import About from './Pages/About/About'

import Footer from './Components/Footer/Footer'
import Travels from './Pages/Travels'
import PersonalDevelopment from './Pages/PersonalDevelopment'
import HealthyFood from './Pages/HealthyFood'
import Technology from './Pages/Technology'
import BlogDetails from './Pages/BlogDetail/BlogDetails'
import Navbar from './Components/Navbar/Navbar'
import Cooperation from './Pages/Cooperation/Cooperation'
import Gallery from './Pages/Gallery/Gallery'


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/cooperation' element={<Cooperation />}/>
        <Route path='/travels' element={<Travels />}/>
        <Route path='/technology' element={<Technology />}/>
        <Route path='/personaldevelopment' element={<PersonalDevelopment />}/>
        <Route path='/healthyfood' element={<HealthyFood />}/>
        <Route path='/blog/:category/:id' element={<BlogDetails />}/>
      </Routes>
       <Footer />
    </div>
  )
}

export default App
