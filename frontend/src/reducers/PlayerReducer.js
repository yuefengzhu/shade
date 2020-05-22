import {GET_PLAYERS, REMOVE_PLAYER, ADD_PLAYER, FIRST_PLAYER,FILTER_ROOM, START_GAME, ENTER_LOBBY} from '../actions/types.js'

const initialState = {
	players:[],
	roomName:'',
	isGameStarted:false,
	isLobbyOpen:false
}

export default function(state = initialState, action) {
	console.log('player r');
	const curRoomName = action.roomName; 
	console.log(curRoomName);
	switch(action.type){
		case GET_PLAYERS:
			console.log('get players');
			console.log(curRoomName);
			return {
				...state,
				players: action.payload,
				// players: players.filter(player => player.roomName === curRoomName),
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
		case START_GAME:
			return{
				...state,
				isGameStarted:true
			};
		case ENTER_LOBBY:
			return{
				...state,
				isLobbyOpen:true
			}
		default:
			return state;
	}
}