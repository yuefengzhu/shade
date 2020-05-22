import React,{Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Header from './layout/Header';
import Dashboard from './pieces/Dashboard';
import Game from './pieces/Game';
import Alerts from './layout/Alerts';
import Form from './pieces/Form';
import Players from './pieces/Players';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from "./common/PrivateRoute";
import {Provider} from 'react-redux';
import store from '../store';
import {Provider as AlertProvider} from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import {loadUser} from '../actions/auth';

//Alert options
const alertOptions = {
	timeout: 3000,
	position:'top center'
};

class App extends Component{
	componentDidMount(){
		console.log('app mounted');
		store.dispatch(loadUser());
	}
	render(){
		return(
			<Provider store = {store}>
				<AlertProvider template = {AlertTemplate} 
				{...alertOptions}>
					<Router>
						<Fragment>
							<Header />
							<Alerts />
							<div className="container">
								<Switch>
									<PrivateRoute exact path="/" component = {Form} />
									<PrivateRoute exact path="/lobby" component = {Players}/>
									<Route exact path="/login" component = {Login} />
									<Route exact path="/register" component = {Register} />
									<PrivateRoute exact path="/game" component ={Game} />
								</Switch>
							</div>
						</Fragment>
					</Router>
				</AlertProvider>
			</Provider>
			
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

