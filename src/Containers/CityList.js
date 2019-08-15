import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { itemsFetchData, getCityIdAction } from '../Actions';
import PropTypes from 'prop-types';

const List = styled.ul`
	visibility: ${p => (p.show ? 'visible' : 'hidden')};
	opacity: ${p => (p.show ? 1 : 0)};
	height: ${p => (p.show ? 'auto' : 0)};
	${p => p.css || null}
`;

class CityList extends Component {
	checkCity = id => {
		if (id === this.props.cityId) {
			return;
		}
		this.props.getCityId(id);
		this.props.getDetails();
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
		cityId: 0,
		list: [[], []],
	};
	static propTypes = {
		cityId: PropTypes.number,
		list: PropTypes.array,
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

export default connect(
	state => {
		return {
			targetCountry: state.getDetails.targetCountry,
			cityId: state.getDetails.cityId,
		};
	},
	dispatch => {
		return {
			getDetails: () => {
				dispatch(itemsFetchData());
			},
			getCityId: id => {
				dispatch(getCityIdAction(id));
			},
		};
	}
)(CityList);
