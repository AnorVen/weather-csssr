import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
	visibility: ${p => (p.show ? 'visible' : 'hidden')};
	opacity: ${p => (p.show ? 1 : 0)};
	height: ${p => (p.show ? 'auto' : 0)};
	${p => p.css || null}
`;
const CityList = ({ list, getDetails, show }) => {
	return (
		<List show={show}>
			{list[1].map((item, i) => (
				<li key={i} onClick={() => getDetails(item.id)}>
					{item.title}
				</li>
			))}
		</List>
	);
};

export default CityList;
