import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Sidebar from './Components/Sidebar/Sidebar'
import Category from './Pages/Category/Category'
import Header from './Pages/Home/Header/Header'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Search from './Pages/Search/Search'
import Show from './Pages/Show/Show'

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Sidebar />
        <Header />
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