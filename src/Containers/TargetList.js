import React, { Component } from 'react';
import { itemsFetchData } from '../Actions';
import { connect } from 'react-redux';
import Country from '../Components/Country';
import CityList from '../Components/CityList';
import { getListAction } from '../Actions';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
	visibility: ${p => (p.show ? 'visible' : 'hidden')};
	opacity: ${p => (p.show ? 1 : 0)};
	height: ${p => (p.show ? 'auto' : 0)};
	${p => p.css || null}
`;

class TargetList extends Component {
	state = {
		showCity: 'AM',
	};

	componentDidMount() {
		this.props.getList();
	}

	checkCity = id => {
		const date = this.props.date;
		console.log(date);
		if (id === this.props.cityId && date === this.props.date) {
			return;
		}
		return this.props.getDetails(date, id);
	};
	handleClick = country => {
		this.setState({
			showCity: country,
		});
	};
	componentDidUpdate(prevProps) {
		if (this.props.date !== prevProps.date && this.props.cityId === prevProps.cityId) {
			return false;
		}
	}

	render() {
		console.log('TargetList render');
		let arrOut = {};
		this.props.cityList.forEach(function(value) {
			if (!arrOut[value.country]) {
				arrOut[value.country] = [];
			}
			arrOut[value.country].push({
				title: value.name,
				id: value.id,
			});
		});
		arrOut = Object.entries(arrOut).sort((item, nextItem) => {
			if (item[0] > nextItem[0]) {
				return 1;
			} else {
				return -1;
			}
		});

		return (
			<div>
				{arrOut.map((item, i) => (
					<div key={i}>
						<Country title={item[0]} showCity={this.handleClick} />
						<List show={this.state.showCity === item[0]}>
							<CityList list={item} getDetails={this.checkCity} />
						</List>
					</div>
				))}
			</div>
		);
	}
}

TargetList.defaultProps = {
	cityList: [
		{
			id: 519188,
			name: 'Novinki',
			country: 'RU',
		},
	],
	date: Date.now(),
	cityId: 0,
};
TargetList.propTypes = {
	cityList: PropTypes.array,
	date: PropTypes.number,
	cityId: PropTypes.number,
};
export default connect(
	state => {
		return {
			cityList: state.cityList,
			date: state.getDetails.date,
			cityId: state.getDetails.cityId,
		};
	},
	dispatch => {
		return {
			getDetails: (date, id) => {
				dispatch(itemsFetchData(date, id));
			},
			getList: () => dispatch(getListAction()),
		};
	}
)(TargetList);
