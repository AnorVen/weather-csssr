import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function mapStateToProps(state) {
	return {
		isLoad: state.getDetails.loading,
		result: state.getDetails.result,
		error: state.getDetails.error,
	};
}

class Details extends Component {
	render() {
		console.log('Details render');
		const { isLoad, result, error } = this.props;
		console.log(result);
		if (isLoad) {
			return <p> Загрузка...</p>;
		}
		if (error) {
			return <p>{error}</p>;
		}
		if (!result) {
			return <p>выберите город</p>;
		} else {
			let tempData = result.list.slice(-8);
			return (
				<div>
					<p> {result.city.name}</p>
					<table>
						<tbody>
							{tempData.map(item => (
								<tr key={item.dt}>
									<td>{item.dt_txt}</td>
									<td>{item.main.temp} *C</td>
									<td>{item.weather[0].description}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			);
		}
	}
}
Details.defaultProps = {
	isLoad: false,
	result: {
		city: {
			name: '',
		},
		list: [
			{
				dt: Date.now(),
				dt_txt: new Date(Date.now()),
				main: { temp: 0 },
				weather: [{ description: '' }],
			},
			{
				dt: Date.now(),
				dt_txt: new Date(Date.now()),
				main: { temp: 0 },
				weather: [{ description: '' }],
			},
			{
				dt: Date.now(),
				dt_txt: new Date(Date.now()),
				main: { temp: 0 },
				weather: [{ description: '' }],
			},
			{
				dt: Date.now(),
				dt_txt: new Date(Date.now()),
				main: { temp: 0 },
				weather: [{ description: '' }],
			},
			{
				dt: Date.now(),
				dt_txt: new Date(Date.now()),
				main: { temp: 0 },
				weather: [{ description: '' }],
			},
			{
				dt: Date.now(),
				dt_txt: new Date(Date.now()),
				main: { temp: 0 },
				weather: [{ description: '' }],
			},
			{
				dt: Date.now(),
				dt_txt: new Date(Date.now()),
				main: { temp: 0 },
				weather: [{ description: '' }],
			},
			{
				dt: Date.now(),
				dt_txt: new Date(Date.now()),
				main: { temp: 0 },
				weather: [{ description: '' }],
			},
		],
	},
	error: '',
};
Details.PropTypes = {
	isLoad: PropTypes.bool,
	error: PropTypes.string,
	result: PropTypes.object,
};
export default connect(mapStateToProps)(Details);
