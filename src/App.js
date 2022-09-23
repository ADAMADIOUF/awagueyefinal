import React from 'react'
import Navbar from './Navbar'

import Sidebar from './Sidebar'
import Submenu from './Submenu'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import SingleProduct from './components/SingleProduct'
import Woman from './components/Woman'
import SingleProductWoman from './components/SingleProductWoman'
import Man from './components/Man'
import SingleProductMan from './components/SingleProductMan'
import Contact from './components/Contact'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Sidebar />
      <Submenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/femmes' element={<Woman />} />
        <Route path='/hommes' element={<Man />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/productWoman/:id' element={<SingleProductWoman />} />
        <Route path='/productMan/:id' element={<SingleProductMan />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App