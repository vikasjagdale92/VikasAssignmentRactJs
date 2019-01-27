import React,{Component} from 'react';
import 	SearchComponent from './SearchComponent.js';
import data from './data.json';

export default class ListComponent extends Component{
	constructor(props){
		super(props);
		this.state={
			InformationArr : [],

		}
	}

	componentWillMount(){
		this.setState({
			InformationArr: data
		})
	}


	getSearchValue(searchVal){
		
		var searchResult = this.state.InformationArr.filter((values,index)=>{
			return values.name ===searchVal || values.gender ===searchVal || values.index===searchVal;
		})

		this.setState({
			InformationArr : searchResult,
		})
		
		

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
			    <SearchComponent getAttribute={this.getSearchValue.bind(this)} resetTable={this.restFun}/>
			    <div id="loader-wrapper">
				    <div id="loader"></div>
				 
				    <div className="loader-section section-left"></div>
				    <div className="loader-section section-right"></div>
				 
				</div>
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
					    		<td colSpan="3" className="noData">Nothing to display</td>
					    	</tr>
					    </tbody>
					}
				  </table>
			</div>
			);
	
	}
}
