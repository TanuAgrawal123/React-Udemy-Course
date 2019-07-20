import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
class App extends Component{
  state={
    person:[
      {name:"tanu",age:21},
      {name:"anubha", age:23},
      {name:"harsh", age:17}
    ],
    otherstate:'some other value'
    
    }
    switchNameHandler=(newname)=>{
     // console.log("It works");
     // Dont't Do This ... this.state.person[0].name="tanu agrawal"
     this.setState({
      person:[
        {name:newname,age:21},
        {name:"anubha", age:23},
        {name:"harsh", age:18}
      ]
     })

  }
   nameChangeHandler=(event)=>{
    this.setState({
      person:[
        {name:"tanu",age:21},
        {name:event.target.value, age:23},
        {name:"harsh", age:18}
      ]
     })
   }
 render(){
  return(
      <div className="App">
      <h1>Hi I m react app</h1>
      <h1 onCopy={this.switchNameHandler}>Switch here!</h1>
      <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
      <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchNameHandler.bind(this,"Tanu Agrawal")} changed={this.nameChangeHandler}> My hobby is not  cooking!  </Person>
      <Person name={this.state.person[2].name} age={this.state.person[2].age}/>

      </div>
      
    )
    
//return React.createElement('div',null, React.createElement('h1',{className:'App'},"hii i am react"));
}}
export default App;
