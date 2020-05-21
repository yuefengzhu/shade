import React, {Component, Fragment} from 'react';
import { withAlert} from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {ErrorsReducer} from "../../reducers/ErrorsReducer";
import {MessageReducer} from "../../reducers/MessageReducer";

export class Alerts extends Component {
	static propTypes = {
		error: PropTypes.object.isRequired,
		message: PropTypes.object.isRequired
	}
	componentDidUpdate(prevProps){
		const {error, alert, message} = this.props;
		if (error !== prevProps.error) {
	    	if (error.msg.playerName) alert.error(error.msg.playerName.join());
	    	if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
	    	if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);
	    	if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
	    	if (error.msg.user) alert.error(error.msg.user.join());
	    	
	    }
	    if(message !== prevProps.message){
	    	if(message.addPlayer) alert.success(message.addPlayer);
	    	if(message.passwordNotMatch) alert.error(message.passwordNotMatch);
	    }

	}
	render(){
		return <Fragment />;
	}
}

const mapStateToProps = state =>({
	error: state.ErrorsReducer,
	message: state.MessageReducer,
})
export default connect(mapStateToProps)(withAlert()(Alerts));