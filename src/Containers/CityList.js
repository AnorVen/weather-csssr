import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { itemsFetchData } from '../Actions';
import PropTypes from 'prop-types';

const List = styled.ul`
	visibility: ${p => (p.show ? 'visible' : 'hidden')};
	opacity: ${p => (p.show ? 1 : 0)};
	height: ${p => (p.show ? 'auto' : 0)};
	${p => p.css || null}
`;

class CityList extends Component {
	checkCity = id => {
		const date = this.props.date;
		console.log(date);
		if (id === this.props.cityId && date === this.props.date) {
			return;
		}
		return this.props.getDetails(date, id);
	};

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		if (nextProps.targetCountry === this.props.targetCountry) {
			return false;
		} else {
			if (
				nextProps.targetCountry !== this.props.list[0] &&
				this.props.targetCountry !== this.props.list[0]
			) {
				return false;
			}
			return true;
		}
	}

	static defaultProps = {
		date: Date.now(),
		cityId: 0,
		list: [[], []],
	};

	render() {
		console.log('CityList render');
		const { list } = this.props;
		return (
			<List show={this.props.targetCountry === list[0]}>
				{list[1].map((item, i) => (
					<li key={i} onClick={() => this.checkCity(item.id)}>
						{console.log(`CityList render ${item.title}`)}
						{item.title}
					</li>
				))}
			</List>
		);
	}
}

CityList.propTypes = {
	date: PropTypes.number,
	cityId: PropTypes.number,
	list: PropTypes.array,
};
export default connect(
	state => {
		return {
			targetCountry: state.getDetails.targetCountry,
			date: state.getDetails.date,
			cityId: state.getDetails.cityId,
		};
	},
	dispatch => {
		return {
			getDetails: (date, id) => {
				dispatch(itemsFetchData(date, id));
			},
		};
	}
)(CityList);
