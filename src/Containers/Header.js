import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import { getDateAction } from '../Actions';

registerLocale('ru', ru);

function mapStateToProps(state) {
	return {
		date: state.getDetails.date,
	};
}

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
	handleChange = date => this.props.getDate(date);
	render() {
		return (
			<HeaderContent>
				<Wrapper>
					<p>Header</p>
					<DatePicker
						locale="ru"
						dateFormat={'dd/MM/yyyy'}
						selected={this.props.date}
						onChange={this.handleChange}
					/>
				</Wrapper>
			</HeaderContent>
		);
	}
}

export default connect(
	mapStateToProps,
	dispatch => {
		return {
			getDate: date => {
				dispatch(getDateAction(date));
			},
		};
	}
)(Header);
