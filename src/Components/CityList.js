import React from 'react';

const CityList = ({ list, getDetails }) => {
	console.log(list);
	return (
		<ul>
			{list[1].map((item, i) => (
				<li key={i} onClick={() => getDetails(item, list[0])}>
					{item.title}
				</li>
			))}
		</ul>
	);
};

export default CityList;
