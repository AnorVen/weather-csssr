import React, { Component } from 'react';
import { getDetails } from '../Actions';
import { connect } from 'react-redux';
import Country from '../Components/Country';
import CityList from '../Components/CityList';
//import list from '../city.js';
import cityList from '../Redusers/cityList';
import { getDetailsAction } from '../Actions';

class TargetList extends Component {
	render() {
		console.log(this.props);
		let arrOut = {};

		this.props.cityList.forEach(function(value) {
			if (!arrOut[value.country]) {
				arrOut[value.country] = [];
			}
			arrOut[value.country].push(value.name);
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
						<Country title={item[0]} />
						<CityList list={item} getDetails={this.props.getDetails} />
					</div>
				))}
			</div>
		);
	}
}

export default connect(
	state => {
		return { cityList: state.cityList };
	},
	dispatch => {
		return {
			getDetails: (city, country) => {
				dispatch(getDetailsAction(city, country));
			},
		};
	}
)(TargetList);
