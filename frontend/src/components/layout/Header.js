import React, { Component} from 'react';
import { Link } from "react-router-dom";
// import Login from '../accounts/Login';
// import Register from '../accounts/Register';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import{logout} from '../../actions/auth'
export class Header extends Component {
	static propTypes = {
		auth: PropTypes.object.isRequired,
		logout: PropTypes.func.isRequired
	}
	render(){
		const{isAuthenticated, user} = this.props.auth;

		const authLinks = (
			<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
				<span className = "navbar-text mr-3">
				<strong>
					{user ? `Welcome to Shade ${user.username}`:''}
				</strong>
				</span>
				<li className="nav-item">
					<button onClick={this.props.logout}
					className='nav-link btn btn-info btn-sm text-light'>Logout</button>
				</li>
			</ul>
		);
		const guestLinks = (

			<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
				<li className="nav-item">
					<Link to="/login" className="nav-link">Login</Link>
				</li>
				<li className="nav-item">
					<Link to="/register" className="nav-link">Register</Link>
				</li>
			</ul>
		);

		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <div className="container">
				<a className="navbar-brand" href="#">Shade</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Saved Burns</a>
				      </li>
				  
				    </ul>
				    {isAuthenticated?authLinks : guestLinks}
				  </div>
					
				</div>
			</nav>
		);
	}
}
const mapStateToProps = state => ({
	auth: state.AuthReducer
})
export default connect(mapStateToProps,{logout})(Header);
