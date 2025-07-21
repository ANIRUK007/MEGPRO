import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import MenuPage from './pages/MenuPage'
import OurStoryPage from './pages/OurStoryPage'
import ChefsPage from './pages/ChefsPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar'

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/blog" element={<ChefsPage />} />
        <Route path="/shop" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
