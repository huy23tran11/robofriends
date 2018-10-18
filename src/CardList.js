import React from 'react';
import {robots} from './robots.js'
import Card from './Card';

const CardList = ({robots})=> {
	const card = robots.map(card =>{
		return <Card key= {card.id} id = {card.id} name = {card.name} email = {card.email} / >
	})
	return (
		<div>
			{card}
		</div>
		)
}


export default CardList;