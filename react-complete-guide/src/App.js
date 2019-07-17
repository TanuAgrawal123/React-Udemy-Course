import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
class App extends Component{
 render(){
  return(
      <div className="App">
      <h1>Hi I m react app</h1>
      <Person name="tanu" age="21"/>
      <Person name="anubha" age="23"/>
      <Person name="harsh" age="17"/>

      </div>
      
    )
    
//return React.createElement('div',null, React.createElement('h1',{className:'App'},"hii i am react"));
}}
export default App;
