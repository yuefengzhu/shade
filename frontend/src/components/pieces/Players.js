import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPlayers, removePlayer} from '../../actions/Players';

export class Players extends Component {
	static propTypes = {
		players: PropTypes.array.isRequired,
		roomName: PropTypes.string,
		getPlayers: PropTypes.func.isRequired,
		removePlayer: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.getPlayers();
		
	}

	onSubmit = (e) => {
		e.preventDefault();
		console.log('starting game, sending players to game with this game id');
	};
	isInRoom({prop}){
		console.log('in room');
		console.log(prop.players);
		if(prop.players.roomName === this.props.roomName){
			return(

					<tr key={player.id}>
						<td>{player.playerName}</td>
						<td><button onClick={this.props.removePlayer.bind(this.player.id)} className="btn nt-danger btn-sm"> remove player</button></td>
					</tr>
				)
		}
	};

	render(){
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
				<button className="btn btn-primary" type="submit">Start Game</button>
			</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state =>({
	players: state.PlayerReducer.players,
	roomName: state.PlayerReducer.roomName

})

export default connect(mapStateToProps,{getPlayers, removePlayer})(Players);