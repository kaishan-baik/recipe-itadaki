import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import Loading from './pages/Loading';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/loading" Component={Loading} />
          <Route path="/recipe/:id" Component={RecipePage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
