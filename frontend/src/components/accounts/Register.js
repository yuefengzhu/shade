import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Login from "./Login"

export class Register extends Compenent{
	//component statee
	state = {
		username:'',
		email:'',
		password:'',
		password2:''
	};
	onSubmit = e => {
		e.preventDefault();
		console.log('submit');
	};
	onChange = e => this.setState({
		[e.target.name]:e.target.value
	});
	render(){
		const {username, email, password, password2} = this.state;
		return(
			<div className="col-md-6 m-auto">
				<div className="card card-body mt-5">
				  	<h2 className="text-center"> Register </h2>
				  	<form onSubmit={this.onSubmit}>
				  		<div className="form-group">
				  			<label>Username</label>
				  			<input 
					  			 className="form-control"
					  			 type="text"
					  			 name="username" 
					  			 onChange={this.onChange}
					  			 value = {playerName} 
				  			 />
				  		</div>
				  		<div className="form-group">
				  			<label>Room Name</label>
				  			<input 
				  				className="form-control"
				  			 	type="email"
				  			 	name="Email" 
				  			 	onChange={this.onChange}
				  			 	value = {email} 
				  			/>
				  		</div>
				  		<div className="form-group">
				  			<label>Enter Password</label>
				  			<input 
				  				className="form-control"
				  			 	type="password"
				  			 	name="password" 
				  			 	onChange={this.onChange}
				  			 	value = {password} 
				  			/>
				  		</div>
				  		<div className="form-group">
				  			<label>Re-enter Password for Sanity</label>
				  			<input 
				  				className="form-control"
				  			 	type="password"
				  			 	name="password2" 
				  			 	onChange={this.onChange}
				  			 	value = {password2} 
				  			/>
				  		</div>
				  		<div className="form-group">
				  			<button type="Submit" className="btn btn-primary">
				  				Register
				  			</button>
				  		</div>
				  		<p>
				  			Already have an account? 
				  			<Link to ='/login'>Login</Link>

				  		</p>
				  	</form>
				</div>
			</div>

		);
	}
}
export default Register;