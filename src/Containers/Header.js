import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

function mapStateToProps(state) {
	return {};
}

const HeaderContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

class Header extends Component {
	render() {
		return <HeaderContent>Header</HeaderContent>;
	}
}

export default connect(mapStateToProps)(Header);
