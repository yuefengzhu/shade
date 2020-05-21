import {GET_PLAYERS, REMOVE_PLAYER, ADD_PLAYER, FIRST_PLAYER,FILTER_ROOM} from '../actions/types.js'

const initialState = {
	players:[],
	roomName:''
}

export default function(state = initialState, action) {
	console.log('player r');
	const curRoomName = action.roomName; 
	console.log(action);
	switch(action.type){
		case GET_PLAYERS:
			return {
				...state,
				// players: action.payload.filter(player => player.roomName === curRoomName),
				players: action.payload
			};
		case REMOVE_PLAYER:
			return {
				...state,
				players: state.players.filter(player => player.id !== action.payload),
			};
		case ADD_PLAYER:
			return {
				...state,
				players: [...state.players, action.payload],
				roomName: action.roomName
			};
		case FIRST_PLAYER:
			return {
				...state,
				players: [...state.players, action.payload],
				roomName: action.roomName
			};
		default:
			return state;
	}
}