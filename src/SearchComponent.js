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
		})
		// console.log(this.state.serchValue);

		this.props.getAttribute(value);
	}

	resetTable=(e)=>{
		this.props.resetTable("reset");
	}
	
	render(){
		return(
			<div className="col-lg-12 assSearch ">
				<div className="pull-right ">
					<input type="text" name="search" id="getValue" ref="getValue" placeholder="Search.."/>&nbsp;&nbsp;
					<button type="button" className="btn btn-primary" onClick={this.getSearchValue}>Serach</button>&nbsp;&nbsp;
					<button type="button" className="btn btn-default" onClick={this.resetTable}>Reset</button>
				</div>
			</div>
			);
	}
}