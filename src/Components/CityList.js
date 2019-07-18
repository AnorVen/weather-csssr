import React, { Component, PureComponent, Fragment } from 'react';

class CityList extends Component {
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		if (nextProps === this.props) {
			return false;
		}
	}

	render() {
		console.log('CityList render');
		const { list, getDetails } = this.props;
		return (
			<Fragment>
				{list[1].map((item, i) => (
					<li key={i} onClick={() => getDetails(item.id)}>
						{console.log(`CityList render ${item.title}`)}
						{item.title}
					</li>
				))}
			</Fragment>
		);
	}
}

export default CityList;
