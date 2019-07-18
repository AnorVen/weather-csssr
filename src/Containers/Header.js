import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import DatePicker from 'react-date-picker';

import { getDateAction } from '../Actions';
import PropTypes from 'prop-types';

const HeaderContent = styled.div`
	height: 50px;
	background-color: #858585;
`;
const Wrapper = styled.div`
	margin: 0 auto;
	display: flex;
	max-width: 1200px;
	padding-left: 50px;
	padding-right: 50px;
	justify-content: space-between;
	align-items: flex-start;
`;

class Header extends Component {
	handleChange = date => {
		this.props.getDate(Date.parse(date) + 60 * 60 * 24 - 1);
	};

	render() {
		console.log('Header render');
		const { currentDate } = this.props;
		return (
			<HeaderContent>
				<Wrapper>
					<p>Header</p>
					<div>
						<DatePicker
							minDate={new Date(Date.now())}
							maxDate={new Date(Date.now() + 60 * 60 * 24 * 5 * 1000)}
							value={new Date(currentDate)}
							onChange={this.handleChange}
						/>
					</div>
				</Wrapper>
			</HeaderContent>
		);
	}
}

Header.defaultProps = {
	currentDate: Date.now(),
};
Header.propTypes = {
	currentDate: PropTypes.number,
};
export default connect(
	state => {
		return {
			currentDate: state.getDetails.date,
		};
	},
	dispatch => {
		return {
			getDate: date => {
				dispatch(getDateAction(date));
			},
		};
	}
)(Header);
