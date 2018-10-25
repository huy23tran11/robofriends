import React, {Component} from 'react'
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import './App.css';


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
		return(
		(!this.state.robots.length) ?
			 <h1 className ='tc'> LOADING.... </h1> :
	
			<div className ='tc'>
				<h1 className = 'f1'><b>Robo-friends</b></h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll>
					<CardList robots ={filterRobot} />
				</Scroll>
			</div>
			)
	}
}

export default App 