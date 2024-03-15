import React from 'react'
import './App.scss'
import Home from './Pages/Home/Home'
import Sidebar from './Components/Sidebar/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './Pages/Category/Category'
import Show from './Pages/Show/Show'
import Search from './Pages/Search/Search'
import Profile from './Pages/Profile/Profile'
import Model from './Components/Model/Model'

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Sidebar />        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/search' element={<Search />} />
          <Route path='/show' element={<Show />} />
          <Route path='/category' element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App