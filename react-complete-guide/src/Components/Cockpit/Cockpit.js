import React from 'react';
import classes from './Cockpit.css';

const cockpit=(props)=>{
    const assignedclasses=[];
    let btnclass='';
    if (props.showPersons){
        btnclass=classes.Red;

    }
    
    if (props.persons.length <=2){
      assignedclasses.push(classes.red);//['red]

    }
    if (props.persons.length <=1){
      assignedclasses.push(classes.bold);//['red','bold']

    }
    return (
        
        <div className={classes.Cockpit}>
        <h1>Hi I m react app</h1>
      <p className={assignedclasses.join(' ')}>This is really working</p>
      <button className={btnclass}
       onClick={props.clicked}>Switch here!</button>
       </div>
    );

};
export default cockpit;
