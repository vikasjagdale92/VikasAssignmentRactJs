import React,{ Component } from 'react';
import { connect } from 'react-redux';

class EmployeeList extends Component{
    render(){
       const arr = this.props.data;
        return(
            <div className="col-lg-6 col-lg-offset-3">
                <h2>List of Employees</h2>
                {arr.data.map((data,index) => {
                   return <li key={index}>{data.fullName}, {data.mobilenum}</li>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state--------------> ",state);
    return{
        data: state.data
    }
}
const EmpList = connect(mapStateToProps)(EmployeeList);
export default EmpList;