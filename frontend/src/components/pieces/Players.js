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
		this.props.getPlayers();
		console.log('mounting'+this.props.players);

		this.props.players.map(player =>(
			console.log('player: '+player.playerName)
			))
	}

	render(){
		return (
			<Fragment>
				<h2>Players</h2>
				<table className= "table table-striped">
					<thead>
						<th>Players</th>
					</thead>
					<tbody>
						{this.props.players.map(player => (
							<tr key={player.id}>
								<td>{player.playerName}</td>
								<td><button onClick={this.props.removePlayer.bind(this,player.id)} className="btn nt-danger btn-sm"> remove player</button></td>
							</tr>

						))}
					</tbody>
				</table>
			</Fragment>
		)
	}
}

const mapStateToProps = state =>({
	players: state.PlayerReducer.players
})

export default connect(mapStateToProps,{getPlayers, removePlayer})(Players);