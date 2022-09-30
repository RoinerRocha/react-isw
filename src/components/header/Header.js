import React, {useState} from "react";
import "./Header.css";

function Header(props) {
	console.log(props);
  

	return (
		<React.Fragment>
			<h1>{props.text}</h1>
		</React.Fragment>
	);
}

export default Header;
