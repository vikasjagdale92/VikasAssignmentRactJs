import React,{Component} from 'react';
export default class SearchComponent extends Component{
	constructor(props){
		super(props);
		this.state={
			serchValue : '',
		}
	}

	getSearchValue=(e)=>{
		e.preventDefault();
		var value = this.refs.getValue.value;
		this.setState({
			serchValue : value,
		});

		this.props.getAttribute(value);
	}

	resetTable=(e)=>{
		this.refs.getValue.value = '';
		this.props.resetTable("reset");
	}
	
	render(){
		return(
			<div className="col-lg-12 col-md-12col-xs-12 col-sm-12 assSearch ">
				
				<div className="btn-group">
				  <input id="getValue" name="search" id="getValue" ref="getValue" placeholder="Search.."className="form-control" />
				  <span id="searchRec" className="glyphicon glyphicon-search"onClick={this.getSearchValue} title="Click to search records"></span>

				  <span id="searchclear" className="glyphicon glyphicon-remove-circle" onClick={this.resetTable} title="Click to reset "></span>
				</div>
			</div>
			);
	}
}