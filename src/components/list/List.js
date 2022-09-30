import React, { useState } from "react";

function List() {
	const [list, setList] = useState([
		{
			name: "daniel",
			age: 30,
		},
		{
			name: "Fabian",
			age: 22,
		},
		{
			name: "Lucia",
			age: 25,
		},
		{
			name: "Ana",
			age: 34,
		},
	]);

	const removeItem = (index) => {
		setList(list.filter(item => item !== list[index]));
	};

	return (
		<div>
			{list.length && (
				<ul>
					{list.map((person, index) => (
						<li key={index}>
							{person.name}
							<button onClick={() => removeItem(index)}>Remove Item</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default List;
