import React from 'react';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Player from './pages/Player';
import NotFound from './pages/404/404';
import MyList from './pages/MyList/MyList';
import Profile from './pages/Profile/Profile';
import Notifications from './pages/Notifications/Notifications';
import AboutUs from './pages/AboutUs/AboutUs';
import SignIn from './pages/SignIn/SignIn';
import SearchPage from './pages/SearchPage/Searchpage';
import Categories from './pages/Categories/Categories';
import Category from './pages/Category/Category';


const Router = () => {

  
  return (
    <BrowserRouter>
    <Routes>
        <Route index element ={<Home/>}   />
        <Route path="/searchpage" element={<SearchPage/>}  />
        <Route path="/player" element={<Player/>}  />
        <Route path="/category" element={<Category/>}  />
        <Route path="/categories" element={<Categories/>}  />
        <Route path="/mylist" element={<MyList/>}  />
        <Route path="/profile" element={<Profile/>}  />
        <Route path="/notifications" element={<Notifications/>}  />
        <Route path="/about" element={<AboutUs/>}  />
        <Route path="/login" element={<SignIn/>}  />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
};

export default Router;