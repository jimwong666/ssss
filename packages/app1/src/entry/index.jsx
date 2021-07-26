import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from '@router';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import simpleAsync from '@utils/reduxSimpleAsync';
import rootReducer from '../rootReducer';

/* eslint-disable */
const store = applyMiddleware(thunk, simpleAsync)(createStore)(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const render = (App) => {
	ReactDOM.render(
		<Provider store={store}>
			我是index页面！
			<App />
		</Provider>,
		document.getElementById('root'),
	);
};

render(RootRouter);
