import React from 'react';

class BarMessage extends React.Component {
	constructor(props) {
	   super(props)
	   this.state = {
	   	 message: [],
	   	 value: ''
	   }
	}

	handleChange(event) {
		console.log(event.target.value)
		this.setState ({
			value: event.target.value
		})
	}

	handleMessage() {
		this.setState ({
			message: this.state.value
		})
	}

	render () {
		return (
		<div>
		  <div>
			{this.state.message}
		  </div> 
		  <div>
		    <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
			<button onClick={this.handleMessage.bind(this)}>Enter New Message of the Day</button>
		  </div>
		</div>
		)
	}
}


export default BarMessage;