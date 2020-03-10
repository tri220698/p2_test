import React from 'react';
import './App.css';
import MenuMaster from './Components/Commons/Header/index'
import Footer from './Components/Commons/Footer/index'
import Routers from './Route'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MenuMaster />
      <Routers />
      <Footer />
    </Router>
  );
}

export default App;
