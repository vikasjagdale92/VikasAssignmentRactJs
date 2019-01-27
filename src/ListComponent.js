import React,{Component} from 'react';
import 	SearchComponent from './SearchComponent.js';
import data from './data.json';

import Loader from 'react-loader-advanced';


export default class ListComponent extends Component{
	constructor(props){
		super(props);
		this.state={
			InformationArr : [],
			flag           :false
		}
	}

	componentWillMount(){
		this.setState({
			InformationArr: data
		})
	}


	getSearchValue(searchVal){
		if(searchVal){
			this.setState({
				flag  : true
			});
			var searchResult = this.state.InformationArr.filter((values,index)=>{
				return values.name ===searchVal || values.gender ===searchVal || values.index===searchVal;
			})
			if(searchResult){
				this.setState({
					InformationArr : searchResult,
					flag           : false
				});
			}else{
				this.setState({
					flag           : false
				});
			}
		}else{
			alert("Please enter any text");
		}
		

	}

	restFun=(value)=>{
		if(value==="reset"){
			this.setState({
				InformationArr: data
			});
		}
	}

	render(){
		return(
			<div className="col-lg-12">
			    <SearchComponent getAttribute={this.getSearchValue.bind(this)} resetTable={this.restFun}/><br/>
			    <Loader show={this.state.flag} message={'fetching Results'}>
				<table className="table table-striped table-hover myTable table-bordered">
				    <thead>
				      <tr className="tableHeader">
				      	<th>Sr. No</th>
				        <th>Name</th>
				        <th>Gender</th>
				      </tr>
				    </thead>
				    
				    {this.state.InformationArr.length>0 ?
					    <tbody>
						    {this.state.InformationArr.map((values,index)=>{
						    	return  <tr key={index}>
									      	<td>{index +1 }</td>
									        <td>{values.name}</td>
									        <td>{values.gender}</td>
									      </tr>
						    })} 
				    	</tbody>
				   
				    :

					    <tbody>
					    	<tr>
					    		<td colSpan="3" className="noData">Sorry No Matches Found</td>
					    	</tr>
					    </tbody>
					}

				  </table>
				  </Loader>
			</div>
			);
	
	}
}
