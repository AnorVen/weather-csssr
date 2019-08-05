import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { changeTargenCountry } from '../Actions';

class Country extends PureComponent {
	render() {
		const { title, showCity } = this.props;
		return (
			<div onClick={() => showCity(title)}>
				{console.log('Country render')}
				{title}
			</div>
		);
	}
}

export default connect(
	state => ({}),
	dispatch => {
		return {
			showCity: country => {
				dispatch(changeTargenCountry(country));
			},
		};
	}
)(Country);
