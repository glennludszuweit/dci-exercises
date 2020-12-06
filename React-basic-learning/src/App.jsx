import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import './App.scss';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Contact />
    </div>
  );
}

export default App;
