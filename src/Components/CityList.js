import React from 'react';

const CityList = ({ list, getDetails }) => {
	return (
		<ul>
			{list[1].map((item, i) => (
				<li key={i} onClick={() => getDetails(item.id)}>
					{item.title}
				</li>
			))}
		</ul>
	);
};

export default CityList;
