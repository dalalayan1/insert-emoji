import React from 'react';
export default class Header extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			insertSmiley: false
		};
	}

	updateVal = (evt) => {

		if(this.state.insertSmiley) {
			this.setState({
				insertSmiley: true
			});
		}

		let val = evt && evt.target && evt.target.innerText;

		if(val.indexOf(';)') !== -1) {
			this.setState({
				insertSmiley: true
			});
		}
	}

	render(){
		return( 
			<div className="main-component">
				<h2>Insert Emoji</h2>
				<div className="custom-input" contentEditable="true" onKeyUp={(e) => this.updateVal(e)}>
					{
						this.state.insertSmiley && <img src='/src/img/blink.jpg' />
					}
				</div>
			</div>
		);
	}
};