import React from 'react';
import ReactDOM from 'react-dom';
//  eslint-disable-line
import RootRouter from '@router';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import simpleAsync from '@utils/reduxSimpleAsync';
import rootReducer from '../rootReducer';

const store = applyMiddleware(thunk, simpleAsync)(createStore)(
	rootReducer,
	// eslint-disable-next-line no-underscore-dangle
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
// console.log(store);
const render = (App) => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root2'),
	);
};

render(RootRouter);
