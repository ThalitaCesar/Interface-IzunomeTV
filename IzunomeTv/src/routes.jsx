import React from 'react';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import Category from './pages/Category/Category';
import Home from './pages/Home/Home';
import Player from './pages/Player';
import NotFound from './pages/404/404';


const Router = () => {

  
  return (
    <BrowserRouter>
    <Routes>
        <Route index element ={<Home/>}   />
        <Route path="/player" element={<Player/>}  />
        <Route path="/categories" element={<Category/>}  />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
};

export default Router;