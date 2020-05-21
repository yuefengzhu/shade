import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPlayers, removePlayer} from '../../actions/Players';

export class Players extends Component {
	static propTypes = {
		players: PropTypes.array.isRequired,
		getPlayers: PropTypes.func.isRequired,
		removePlayer: PropTypes.func.isRequired
	};

	componentDidMount() {
		allPlayers=this.props.players;
		
	}

	onSubmit = (e) => {
		e.preventDefault();
		console.log('starting game, sending players to game with this game id')
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
							<tr key={player.id}>
								<td>{player.playerName}</td>
								<td><button onClick={this.props.removePlayer.bind(this,player.id)} className="btn nt-danger btn-sm"> remove player</button></td>
							</tr>

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
	players: state.PlayerReducer.players
})

export default connect(mapStateToProps,{getPlayers, removePlayer})(Players);