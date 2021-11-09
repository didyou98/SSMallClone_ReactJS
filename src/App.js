import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import TransformEffect from './components/TransformEffect';
function App() {
  return (
    <Router>
      <Navbar />
      
      <Slide drowdown = {Navbar.dropdown}/>
    </Router>
      
  );
}



export default App;
