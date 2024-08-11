import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes ,Router } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import States from './Components/States';
import Dishes from './Components/Dishes';
import Details from './Components/Details';
import Recipe from './Search/Recipe';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/states" element={<States />} />
          <Route path="/state/:stateId/dishes" element={<Dishes />} />
          <Route path="/state/:stateId/dishes/:dishId" element={<Details />} />
          <Route path="/dishes/:dishId" element={<Details />} />
          <Route path="/recipe/:meal" element={<Recipe />} />

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
