import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import GenderBanner from './components/GenderBanner'
import CrazyOffers from './components/CrazyOffers'
import Category from './components/Category'
import Footer from './components/Footer'

function App() {
  

  return (
     <div>
     <Header/>
     <GenderBanner/>
     <CrazyOffers/>
     <Category/>
     <Footer/>
     </div>
  )
}

export default App
