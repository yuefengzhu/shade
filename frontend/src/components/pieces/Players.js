import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPlayers, removePlayer, startGame} from '../../actions/Players';
import { Link, Redirect } from 'react-router-dom';

export class Players extends Component {
	static propTypes = {
		players: PropTypes.array.isRequired,
		roomName: PropTypes.string,
		isGameStarted: PropTypes.bool,
		getPlayers: PropTypes.func.isRequired,
		removePlayer: PropTypes.func.isRequired,
		startGame: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.getPlayers();
	}

	startGameSubmit = (e) => {
		e.preventDefault();
		console.log('starting game, sending players to game with this game id');
		this.props.startGame();
	};


	render(){
		if(this.props.isGameStarted){
			return <Redirect to="/game" />;
		}
		return (
			<Fragment>
			<div className="card card-body mt-4 mb-4">
				<h2>Lobby</h2>
				<table className= "table table-striped">
					<div class="card-header">
						Players
					</div>
					<tbody>
						{this.props.players.map(player => (
							(player.roomName === this.props.roomName)?	
								<tr key={player.id}>
									<td>{player.playerName}</td>
									<td><button onClick={this.props.removePlayer.bind(this, player.id)} className="btn nt-danger btn-sm"> remove player</button></td>
								</tr>:''
						))}
					</tbody>
				</table>
				<div className="form-group">
					<button className="btn btn-primary" type="Submit" onClick={this.startGameSubmit.bind(this)} >Start Game</button>
				</div>
			</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state =>({
	players: state.PlayerReducer.players,
	roomName: state.PlayerReducer.roomName,
	isGameStarted: state.PlayerReducer.isGameStarted

})

export default connect(mapStateToProps,{getPlayers, removePlayer, startGame})(Players);