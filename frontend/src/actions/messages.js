import {GET_ERRORS} from './types'

// Return errors

export const returnErrors = (msg,status)=>{
	return{
		type:GET_ERRORS,
		payload:{msg,status}
	}
}