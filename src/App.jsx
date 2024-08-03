import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import SearchBar from './components/SearchBar/SearchBar'
import ExploreFood from './components/ExploreFood/ExploreFood'
import FoodMenu from './components/FoodMenu/FoodMenu'

const App = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <ExploreFood />
      <FoodMenu />
    </div>
  )
}

export default App