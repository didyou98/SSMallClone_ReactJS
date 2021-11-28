import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
// import './reset.css'
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import ContentSection from './components/ContentSection'


function App() {
  return (
    <Router>
      <Navbar />
      <Slide />
      <ContentSection />
    </Router>
      
  );
}



export default App;
