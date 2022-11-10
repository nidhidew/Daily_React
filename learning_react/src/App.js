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
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.modules.css'
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      {/* <h1 className='error'>Error</h1>
      <h1 className='success'>Success</h1> */}
      {/* <Greetings name="juhi"/>
      <PortFolio/>
      <Welcome/>
      <Hello/>
      <Message/>
      <Counter/>
      <FunctionClick/>
      <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <Stylesheet primary="false"/>  
      <Inline/>     */}
      <Form/>
    </div>
  );
}

export default App;
