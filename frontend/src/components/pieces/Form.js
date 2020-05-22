import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addPlayer,firstPlayer,getPlayers,enterLobby} from '../../actions/Players'
import { Link, Redirect } from 'react-router-dom';

export class Form extends Component {
	state = {
		playerName:'',
		roomName:'',
		password:''
	}
	static propTypes = {
		addPlayer: PropTypes.func.isRequired,
		isLobbyOpen: PropTypes.bool
	}
	onChange = e => this.setState({ [e.target.name]:e.target.value});

	onSubmit = e =>{
		console.log('joining a lobby');
		e.preventDefault();
		const {playerName, roomName, password} = this.state;
		const player = {playerName, roomName};
		this.props.addPlayer(player);
		this.props.enterLobby();

	}
	onSubmitNewGame = e =>{
		console.log('creating new lobby');
		e.preventDefault();
		const {playerName, roomName, password} = this.state;
		const player = {playerName,roomName};
		this.props.firstPlayer(player);
		this.props.enterLobby();
	}
	render(){
		const {playerName, roomName, password} = this.state;
		if(this.props.isLobbyOpen){
			return <Redirect to="/lobby" />;
		}
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
			  			 	name="roomName" 
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
			  				Join Game
			  			</button>
			  			
			  			<button type="Submit" onClick={this.onSubmitNewGame.bind(this)}className="btn btn-primary float-right">
			  				Create New Game
			  			</button>
			  			
			  		</div>
			  	</form>
			</div>
			
		)
	}
}
const mapStateToProps = state =>({
	isLobbyOpen: state.PlayerReducer.isLobbyOpen,

})
export default connect(mapStateToProps, {addPlayer,firstPlayer,getPlayers,enterLobby})(Form);