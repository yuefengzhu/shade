import axios from 'axios';

import {GET_PLAYERS,REMOVE_PLAYER,ADD_PLAYER} from './types'

// GET PLAYERS
export const getPlayers = () => dispatch =>{
	axios
		.get('/api/Player/')
		.then(res => {
			dispatch({
				type:GET_PLAYERS,
				payload: res.data

			});
		}).catch(err => console.log(err));
};

// Remove PLAYER
export const removePlayer = (id) => dispatch =>{
	axios
		.delete(`/api/Player/${id}/`)
		.then(res => {
			dispatch({
				type:REMOVE_PLAYER,
				payload: id

			});
		}).catch(err => console.log(err));
};

// ADD PLAYERS
export const addPlayer = (player) => dispatch =>{
	axios
		.post('/api/Player/', player)
		.then(res => {
			dispatch({
				type:ADD_PLAYER,
				payload: res.data

			});
		}).catch(err => console.log(err));
};