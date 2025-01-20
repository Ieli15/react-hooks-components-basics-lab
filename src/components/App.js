// src/components/App.js

import React from 'react';
import Navbar from './Navbar';  // assuming Navbar is already created
import Home from './Home';      // assuming Home is already created
import About from './About';    // newly created About component

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
