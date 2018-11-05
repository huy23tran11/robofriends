import React, {Component} from 'react'

class Clock extends Component{
	constructor(props){
		super();
		this.state ={
			date : new Date()
		}
	}
	timeChange = ()=>{
		this.setState({date: new Date() })
	}

	componentWillMount() {
		setInterval(()=>this.timeChange(),1000)
	}
	render() {
		return (
			<h1 className = 'tc'>{this.state.date.toLocaleTimeString()}</h1>
		)
	}
}


export default Clock