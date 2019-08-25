import React,{ Component } from 'react';
import { connect } from "react-redux";
import { submitFormData } from "../actions";

class EmployeeForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			fullName: '',
			mobilenum: ''
		}
	}
	submitForm = (event) => {
		event.preventDefault();
		const formValue = {
			fullName: this.state.fullName,
			mobilenum: this.state.mobilenum
		}
		this.props.submitFormData(formValue);
		this.setState({
			fullName : '',
			mobilenum : ''
		});
		this.props.history.push('/form-list'); //nevigate to page /form-list
	}

	handleChange = (event) =>{
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]:value
		});
	}

	render(){
		return(
			<div className="col-lg-6 col-lg-offset-3" style={{border:"1px solid #000",marginTop: "10%",padding:"15px"}}>
				<h3>Employee Info</h3>
				<form onSubmit={this.submitForm}>
					<input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange} className="col-lg-12 text un" style={{marginBottom:"30px",height:"35px"}} placeholder="Eployee Name"/>
					<input type="number" name="mobilenum" value={this.state.mobilenum} onChange={this.handleChange} className="col-lg-12 pass" style={{marginBottom:"30px",height:"35px"}} placeholder="Eployee Mobile"/>
					<button type="submit" style={{float:"right"}}> SUBMIT</button>
				</form>
			</div>
			);

	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		submitFormData: formValueObj => dispatch(submitFormData(formValueObj))
	}
}

const EmployeeFormData = connect(null, mapDispatchToProps)(EmployeeForm);

export default EmployeeFormData;

