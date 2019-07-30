import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.css';

class App extends Component{
  state={
    person:[
      {id:'1' ,name:"tanu",age:21},
      {id:'2' ,name:"anubha", age:23},
      {id:'3' ,name:"harsh", age:17}
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
   nameChangeHandler=(event,id)=>{

   const personIndex=this.state.person.findIndex(p=>{
     return p.id===id;

   });
   const person={...this.state.person[personIndex]};
   // const person=Objectassign({},this.state.person[personIndex]);

   person.name=event.target.value;
   const persons=[...this.state.person]
   persons[personIndex]=person
   
    this.setState({person:persons});

   }
   togglePersonHandler=()=>
   {
   const doesShow=this.state.showPersons
   this.setState({showPersons:!doesShow})
   }
   personDeleteHandler=(index)=>
   {
     const persons=[...this.state.person];//spread operator to create new array having elements of old array
     persons.splice(index,1);
     this.setState({person:persons});

   }
 render(){
  
   let persons=null;
   let btnclass='';


   if (this.state.showPersons){
     persons=(
       <div>
         {this.state.person.map((person,index) => {
           return <Person 
           click={()=>this.personDeleteHandler(index)}

           name= {person.name}
           age={person.age}
           key={person.id}
           changed={(event)=>this.nameChangeHandler(event,person.id)}/>
         })}
       </div>
     );
    btnclass=classes.Red;

    
    
   }
   const assignedclasses=[];
    if (this.state.person.length <=2){
      assignedclasses.push('red');//['red]

    }
    if (this.state.person.length <=1){
      assignedclasses.push('bold');//['red','bold']

    }
  return(
   
      <div className={classes.App}>
      <h1>Hi I m react app</h1>
      <p className={assignedclasses.join(' ')}>This is really working</p>
      <button className={btnclass}
       onClick={this.togglePersonHandler}>Switch here!</button>
      {persons}
      
      </div>
     
    )
    
//return React.createElement('div',null, React.createElement('h1',{className:'App'},"hii i am react"));
}}
export default App;
