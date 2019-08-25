import React,{ Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import ShowData from './components/ShowData';
import './App.css';

class App extends Component{
  render(){
    return(
      <Router>
        <Route exact path = "/" component = {EmployeeForm}></Route>
        <Route path = "/form-list" component = {EmployeeList}></Route>
        <Route path = "/data-grid" component = {ShowData}></Route>
      </Router>
      );
  }
}
export default App;