import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { styled } from 'styled-components';
import rootReducer from './Redusers';

const store = createStore(rootReducer);

const Main = styled.div`
	background-color: red;
	font-family: Arial, sans-serif;
	color: #000;
`;
const Header = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
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
				<Header className="App-header">
					<p>Header</p>
				</Header>
				<Content></Content>
			</Main>
		</Provider>
	);
};

export default App;
