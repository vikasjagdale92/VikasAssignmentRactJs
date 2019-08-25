import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowData extends Component{

    showAllInfo = (data) => {
        console.log("data ---> ",data);
    }
    render(){
        return(
            <div className="col-lg-8 col-lg-offset-2">
                <h3>List of Employee</h3>
                <table className="table table-border">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>username</th>
                            <th>email</th>
                            <th>Phone</th>
                            <th>website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.showData.map((data, index)=>{
                            return <tr key={index} onClick={()=>this.showAllInfo(data)}> 
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.username}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.website}</td>
                                    </tr>
                        })}
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("state.TableListData ------>",state);
    return {
        showData : state.data.tableListData
    }
}

const EmployeeList = connect(mapStateToProps)(ShowData);
export default EmployeeList;