import React, {useState} from "react";
import "./Body.css";
import List1 from '../list/List1';

import List from "../list/List";

function Body(props) {

	return (
		<React.Fragment>
			<p>Body</p>
			<List />
			<List1 persona="juanito"/>
			<List1 persona="Andres"/>
			<List1 persona="Roiner"/>
			<List1 persona="Pedro"/>
		</React.Fragment>
	);
}

export default Body;