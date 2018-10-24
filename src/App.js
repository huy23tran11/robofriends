import React, {Component} from 'react'
import CardList from './CardList.js'
import {robots} from './robots'
import SearchBox from './SearchBox.js'
import './App.css'
import Scroll from './Scroll'
class App extends Component{
	constructor() {
		super();
		this.state = {
			robots : [],
			searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users=> this.setState({robots:users}))
	}

	onSearchChange = (event) => {
		this.setState({searchfield:event.target.value})
		// console.log(filterRobot);
	}

	render() {
		const filterRobot = this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.robots.length === 0){
			return <h1 className ='tc'> LOADING.... </h1>
		}
		else{
			return (
			<div className ='tc'>
				<h1 className = 'f1'><b>Robo-friends</b></h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll>
					<CardList robots ={filterRobot} />
				</Scroll>
			</div>
			);
		}
	}
}

export default App 