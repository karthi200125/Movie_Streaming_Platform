import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { toast } from 'sonner';
import './App.scss';
import PageLoading from './Components/PageLoading/PageLoading';
import Toast from './Components/Toast/Toast';
import DashBoard from './Pages/DashBoard/DashBoard';
const Sidebar = lazy(() => import('./Components/Sidebar/Sidebar'));
const Category = lazy(() => import('./Pages/Category/Category'));
const Header = lazy(() => import('./Pages/Home/Header/Header'));
const Home = lazy(() => import('./Pages/Home/Home'));
const Profile = lazy(() => import('./Pages/Profile/Profile'));
const Search = lazy(() => import('./Pages/Search/Search'));
const Show = lazy(() => import('./Pages/Show/Show'));

const App = () => {

  const token = localStorage.getItem('access_token');
  if (!token) {
    toast.error(<Toast tmsg={"Token Expired login again"} />)
    localStorage.removeItem('user')
  }


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
            <Route path='/dash' element={<DashBoard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
