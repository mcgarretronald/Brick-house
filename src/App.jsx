import { useState } from 'react'
import './App.css'
import Navigationbar from './components/NavigationBar'
import Searchbar from './components/SearchBar'
import Landingpage from './components/LandingPage'
import Recentlyviewed from './components/RecentlyViewed'
import New from './components/New'
import Series from './components/Series'
import Discount from './components/Discounts'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Navigationbar/>
    <Searchbar/>
    <Landingpage/>
    <Recentlyviewed/>
    <New/>
    <Series/>
    <Discount/>
    <Footer/>

    
    
    </>
  )
}

export default App
