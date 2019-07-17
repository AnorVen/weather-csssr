import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		isLoad: state.getDetails.loading,
		result: state.getDetails.result,
	};
}

class Details extends Component {
	render() {
		const { isLoad, result } = this.props;
		console.log(result);
		return (
			<div>
				<p> {isLoad ? 'Загрузка...' : 'done'}</p>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Details);
