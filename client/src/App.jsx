import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import PageLoading from './Components/PageLoading/PageLoading';
const Sidebar = lazy(() => import('./Components/Sidebar/Sidebar'));
const Category = lazy(() => import('./Pages/Category/Category'));
const Header = lazy(() => import('./Pages/Home/Header/Header'));
const Home = lazy(() => import('./Pages/Home/Home'));
const Profile = lazy(() => import('./Pages/Profile/Profile'));
const Search = lazy(() => import('./Pages/Search/Search'));
const Show = lazy(() => import('./Pages/Show/Show'));

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Suspense fallback={<PageLoading />}>
          <Sidebar />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/search' element={<Search />} />
            <Route path='/show' element={<Show />} />
            <Route path='/category' element={<Category />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
