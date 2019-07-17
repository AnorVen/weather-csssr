import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		isLoad: state.getDetails.loading,
		result: state.getDetails.result,
		error: state.getDetails.error,
	};
}

class Details extends Component {
	render() {
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

			console.log(tempData);
			return (
				<div>
					<p> {result.city.name}</p>
					<table>
						{tempData.map(item => (
							<tr key={item.dt}>
								<td>{item.dt_txt}</td>
								<td>{item.main.temp} *C</td>
								<td>{item.weather[0].description}</td>
							</tr>
						))}
					</table>
				</div>
			);
		}
	}
}

export default connect(mapStateToProps)(Details);
