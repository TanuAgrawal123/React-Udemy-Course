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
    otherstate:'some other value',
    showPersons:false
    
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
   togglePersonHandler=()=>
   {
   const doesShow=this.state.showPersons
   this.setState({showPersons:!doesShow})
   }
 render(){
   const style={
     backgroundColor:'white',
     font:'inherit',
     border: '1px solid blue',
     padding:'8px'

   }
  return(
      <div className="App">
      <h1>Hi I m react app</h1>
      <button 
      style={style} onClick={this.togglePersonHandler}>Switch here!</button>
      {this.state.showPersons?
      <div>
      <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
      <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.switchNameHandler.bind(this,"Tanu Agrawal")} changed={this.nameChangeHandler}> My hobby is not  cooking!  </Person>
      <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
</div>:null}
      </div>
      
    )
    
//return React.createElement('div',null, React.createElement('h1',{className:'App'},"hii i am react"));
}}
export default App;
