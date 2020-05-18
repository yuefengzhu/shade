import React, {Component, Fragment} from 'react';
import { withAlert} from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {ErrorsReducer} from "../../reducers/PlayerReducer"

export class Alerts extends Component {
	static propTypes = {
		error: PropTypes.object.isRequired
	}
	componentDidUpdate(prevProps){
		const {error, alert} = this.props;
		
		if(error !== prevProps.error){
			if(error.msg.playerName) alert.error(`${error.msg.playerName.join()}`);
		}
	}
	render(){
		return <Fragment />;
	}
}

const mapStateToProps = state =>({
	error: state.ErrorsReducer
})
export default connect(mapStateToProps)(withAlert()(Alerts));