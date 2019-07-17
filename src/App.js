import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import TargetList from './Containers/TargetList';
import Details from './Containers/Details';
import Header from './Containers/Header';
import rootReducer from './Redusers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

const Main = styled.div`
	background-color: #eee;
	font-family: Arial, sans-serif;
	color: #000;
`;

const Content = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
`;

const App = () => {
	return (
		<Provider store={store}>
			<Main>
				<Header />
				<Content>
					<TargetList />
					<Details />
				</Content>
			</Main>
		</Provider>
	);
};

export default App;
