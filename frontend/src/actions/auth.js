import axios from 'axios';
import { returnErrors } from './messages';
import{
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL
} from './types';

//check token and load user

export const loadUser = () => (dispatch,getState)=>{
	//User Loading
	dispatch({type: USER_LOADING});

	axios.get('/api/getUser/',  getTokenConfig(getState))
		.then((res)=>{
			dispatch({
				type: USER_LOADED,
				payload:res.data
			});
		}).catch(err => {
			console.log("load User error");
			dispatch(returnErrors(err.response.data), err.response.status);
			dispatch({
				type: AUTH_ERROR
			});
		})
}
// LOGIN USER
export const login = (username, password) => (dispatch)=>{

	//Headers
	const config = {
		headers:{
			'Content-Type': 'application/json'
		}
	}
	const body = JSON.stringify({
		username,password
	});

	axios.post('/api/login/', body, config)
		.then((res)=>{
			dispatch({
				type: LOGIN_SUCCESS,
				payload:res.data
			});
		}).catch(err => {
			dispatch(returnErrors(err.response.data), err.response.status);
			dispatch({
				type: LOGIN_FAIL
			});
		})
}
// Register USER
export const register = ({username, password, email}) => (dispatch)=>{

	//Headers
	const config = {
		headers:{
			'Content-Type': 'application/json'
		}
	}
	const body = JSON.stringify({
		username,password,email
	});

	axios.post('/api/register/', body, config)
		.then((res)=>{
			dispatch({
				type: REGISTER_SUCCESS,
				payload:res.data
			});
		}).catch(err => {
			dispatch(returnErrors(err.response.data), err.response.status);
			dispatch({
				type: REGISTER_FAIL
			});
		})
}
// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post('/api/logout/', null, getTokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LOGOUT_SUCCESS
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};


// Setup config with token - helper function
export const getTokenConfig = (getState) => {
  
  const token = getState().AuthReducer.token;


  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }
  return config;
};

