import React, { Component, memo } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import DatePicker from 'react-date-picker';
import { getDateAction, itemsFetchData } from '../Actions';
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
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return nextProps.currentDate !== this.props.currentDate;
	}

	handleChange = date => {
		if (new Date(this.props.currentDate).getDate() !== new Date(date).getDate()) {
			this.props.getDate(Date.parse(date));
			this.props.getDetails();
		}
	};
	static defaultProps = {
		currentDate: Date.now(),
		cityId: 0,
	};
	static propTypes = {
		currentDate: PropTypes.number,
		cityId: PropTypes.number,
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
							maxDate={new Date(Date.now() + 60 * 60 * 24 * 4 * 1000)}
							value={new Date(currentDate)}
							onChange={this.handleChange}
						/>
					</div>
				</Wrapper>
			</HeaderContent>
		);
	}
}

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
			getDetails: () => {
				dispatch(itemsFetchData());
			},
		};
	}
)(memo(Header));
