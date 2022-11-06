import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings'
import { PortFolio } from './components/PortFolio';
import Welcome from './components/Welcome';
import Hello from './components/Hello_ex';
import Message from './components/Messsage';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
// import ChileComponent from './components/ChildComponent';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greetings name="juhi"/>
      <PortFolio/>
      <Welcome/>
      <Hello/>
      <Message/>
      <Counter/>
      <FunctionClick/>
      <ClassClick/> */}
      {/* <EventBind/> */}
      <ParentComponent/>
      
    </div>
  );
}

export default App;
