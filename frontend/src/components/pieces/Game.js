import React, { Component, Fragment } from 'react';

export class Game extends Component{
	render(){
		return(
			<Fragment>
				<div className="card text-white bg-info mb-3" styles="max-width: 18rem;">
				  <div className="card-header">Remember, the goal is to make people cry</div>
				  <div className="card-body">
				    <p className="card-text">What's something that Yuefeng would like on his pizza?</p>
				  </div>
				</div>
				<form>
					<div className="form-group">
						<label for="exampleFormControlTextarea1"> Enter Here</label>
						<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
					</div>
					<button type="Submit"className="btn btn-primary float-right">
			  				Submit
			  		</button>
				</form>



			</Fragment>


		)
	}
}

export default Game;
