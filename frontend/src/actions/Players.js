import axios from 'axios';

import {GET_PLAYERS,REMOVE_PLAYER,ADD_PLAYER, GET_ERRORS, FIRST_PLAYER, FILTER_ROOM} from './types';

import {returnErrors} from './messages';

import {getTokenConfig} from './auth'

// GET PLAYERS gestate for token
export const getPlayers = () => (dispatch,getState) =>{
	axios
		.get('/api/Player/',getTokenConfig(getState))
		.then(res => {
			dispatch({
				type:GET_PLAYERS,
				payload: res.data

			});
			
		}).catch(err => {
			const errors = dispatch(returnErrors(err.response.data, err.response.status));
		});
};

// Remove PLAYER
export const removePlayer = (id) => (dispatch,getState) =>{
	axios
		.delete(`/api/Player/${id}/`,getTokenConfig(getState))
		.then(res => {
			dispatch({
				type:REMOVE_PLAYER,
				payload: id

			});
		}).catch(err => console.log(err));
};

// ADD PLAYERS
export const addPlayer = (player) => (dispatch,getState) =>{
	console.log('adding player');
	console.log(player);
	axios
		.post('/api/Player/', player,getTokenConfig(getState))
		.then(res => {
			dispatch({
				type:ADD_PLAYER,
				payload: res.data,
				roomName:res.data.roomName
			});
			
		}).catch(err => {
			const errors = dispatch(returnErrors(err.response.data, err.response.status));
		});
};

// ADD PLAYERS
export const firstPlayer = (player) => (dispatch,getState) =>{
	console.log('adding new player');
	console.log(player);
	axios
		.post('/api/Player/', player,getTokenConfig(getState))
		.then(res => {
			dispatch({
				type:FIRST_PLAYER,
				payload: res.data,
				roomName:res.data.roomName
			});
		}).catch(err => {
			const errors = dispatch(returnErrors(err.response.data, err.response.status));
		});
};