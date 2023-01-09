import React from 'react'
import Navbar from './Components/Header/Navbar'
import SearchBar from './Components/SearchBar'
import Banner from './Components/Banner'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import HouseListingForm from './Components/HouseListingForm'
import './StyleSheet/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/List-your-property' element={
          <>
            <Navbar />
            <HouseListingForm /> 
          </>}
        >
        </Route>
        <Route path='/' element={
          <>
            <Navbar />
            <SearchBar />
            <Banner />
          </>}
        >
        </Route>
      </Routes>
    </Router>
  )
}

export default App