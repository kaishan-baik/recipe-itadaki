import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import Loading from './pages/Loading';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <div className="w-[100vw] h-[100vh]">
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/home" Component={HomePage} />
          <Route path="/loading" Component={Loading} />
          <Route path="/recipe/:id" Component={RecipePage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
