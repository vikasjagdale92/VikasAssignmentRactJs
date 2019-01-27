import React,{Component} from 'react';
import ListComponent from './ListComponent.js';
import './App.css';

export default class AppComponent extends Component{
  render(){
    return(
      <div className="col-lg-8 col-lg-offset-2 col-md-12 col-md-offset-2">
      	<div className="col-lg-12 headingText">
      		<h3>Search Record According to Name, Gender and index(id)</h3>
      	</div>
        <ListComponent/>
      </div>
      );
  }
}