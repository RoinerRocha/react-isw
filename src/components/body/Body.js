import React, {useState} from "react";
import "./Body.css";
import List1 from '../list/List1';
import Table from '../list/Table';

import List from "../list/List";

function Body(props) {

	const sujeto = {
		nombre: 'khazix',
		cursos: 'ingenieria',
		universidad: 'UTN',
		nombre2: 'Andres',
		cursos2: 'ingenieria',
		universidad2: 'TEC',
		nombre3: 'Roiner',
		cursos3: 'ingenieria',
		universidad3: 'UNED'
	}

	return (
		<React.Fragment>
			<p>Body</p>
			<List />
			<List1 persona="juanito"/>
			<List1 persona="Andres"/>
			<List1 persona="Roiner"/>
			<List1 persona="Pedro"/>
			<Table/>
			
		</React.Fragment>
	);
}

export default Body;