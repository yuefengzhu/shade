import {GET_PLAYERS, REMOVE_PLAYER, ADD_PLAYER} from '../actions/types.js'

const initialState = {
	players:[]
}

export default function(state = initialState, action) {
	switch(action.type){
		case GET_PLAYERS:
			return {
				...state,
				players: action.payload.filter(player => player.roomName === 'exampleroom')
			};
		case REMOVE_PLAYER:
			return {
				...state,
				players: state.players.filter(player => player.id !== action.payload)
			};
		case ADD_PLAYER:
			return {
				...state,
				players: [...state.players, action.payload]
			};
		default:
			return state;
	}
}