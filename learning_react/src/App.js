import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings'
import { PortFolio } from './components/PortFolio';
import Welcome from './components/Welcome';
import Hello from './components/Hello_ex';
import Message from './components/Messsage';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Greetings name="juhi"/>
      <PortFolio/>
      <Welcome/>
      <Hello/>
      <Message/>
      <Counter/>
    </div>
  );
}

export default App;
