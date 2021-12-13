import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import './reset.css'
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import ContentSection from './components/ContentSection'
import Parallax from './components/Parallax';


function App() {
  return (
    <Router>
      <Route path='/' exact>
        <Navbar />
        <Slide />
        <ContentSection />
      </Route>
      <Route path="/parallax" exact>
        <Parallax />
      </Route>
    </Router>
      
  );
}



export default App;
