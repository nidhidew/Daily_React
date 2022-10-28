import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings'
import { PortFolio } from './components/PortFolio';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greetings/>
      <PortFolio/>
      <Welcome/>
    </div>
  );
}

export default App;
