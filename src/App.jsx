import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
function App() {
  return (
    <>
      <Router>
        <Home />
        
        {/* Define your routes here */}
      </Router>
    </>
  );
}

export default App;
