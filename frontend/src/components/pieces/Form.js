import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addPlayer} from '../../actions/Players'

export class Form extends Component {
	state = {
		playerName:'',
		roomname:'',
		password:''
	}
	static propTypes = {
		addPlayer: PropTypes.func.isRequired
	}
	onChange = e => this.setState({ [e.target.name]:e.target.value});

	onSubmit = e =>{

		e.preventDefault();
		const {playerName, roomname, password} = this.state;
		const player = {playerName};
		this.props.addPlayer(player);
	}
	render(){
		const {playerName, roomName, password} = this.state;
		return (
			<div className="card card-body mt-4 mb-4">
			  	<h2> Join a Game </h2>
			  	<form onSubmit={this.onSubmit}>
			  		<div className="form-group">
			  			<label>Nickname</label>
			  			<input 
				  			 className="form-control"
				  			 type="text"
				  			 name="playerName" 
				  			 onChange={this.onChange}
				  			 value = {playerName} 
			  			 />
			  		</div>
			  		<div className="form-group">
			  			<label>Room Name</label>
			  			<input 
			  				className="form-control"
			  			 	type="text"
			  			 	name="roomname" 
			  			 	onChange={this.onChange}
			  			 	value = {roomName} 
			  			/>
			  		</div>
			  		<div className="form-group">
			  			<label>Password</label>
			  			<input 
			  				className="form-control"
			  			 	type="text"
			  			 	name="password" 
			  			 	onChange={this.onChange}
			  			 	value = {password} 
			  			/>
			  		</div>
			  		<div className="form-group">
			  			<button type="Submit" className="btn btn-primary">
			  				Submit
			  			</button>
			  		</div>
			  	</form>
			</div>
			
		)
	}
}

export default connect(null, {addPlayer})(Form);