import React, { Component } from 'react';
import { itemsFetchData } from '../Actions';
import { connect } from 'react-redux';
import Country from '../Components/Country';
import CityList from '../Components/CityList';
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
	render() {
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

						<CityList
							show={this.state.showCity === item[0]}
							list={item}
							getDetails={this.checkCity}
						/>
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
