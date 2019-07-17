import React, { Component } from 'react';
import { itemsFetchData } from '../Actions';
import { connect } from 'react-redux';
import Country from '../Components/Country';
import CityList from '../Components/CityList';
//import list from '../city.js';
import cityList from '../Redusers/cityList';
import { getListAction } from '../Actions';

class TargetList extends Component {
	state = {
		showCity: 'AM',
	};
	componentDidMount() {
		this.props.getList();
	}
	checkCity = id => {
		const date = this.props.date;
		// new Date(this.props.date - Date.now()).getDay() + 1

		return this.props.getDetails(date, id);
	};
	handleClick = country => {
		this.setState({
			showCity: country,
		});
	};
	render() {
		console.log(this.props);
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

						<CityList list={item} getDetails={this.checkCity} />
					</div>
				))}
			</div>
		);
	}
}

export default connect(
	state => {
		return {
			cityList: state.cityList,
			date: state.getDetails.date,
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
