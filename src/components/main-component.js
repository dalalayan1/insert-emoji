import React from 'react';
export default class Header extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			inputVal: ''
		};
	}

	updateVal = (evt) => {
		this.setState({
			inputVal: this.refs.inputVal.value
		});
	}

	render(){
		return( 
			<div className="main-component">
				<h2>Insert Emoji</h2>
				<input ref="inputVal" onChange={(e) => this.updateVal(e)}/>
				<div className="custom-input">{this.state.inputVal}</div>
			</div>
		);
	}
};