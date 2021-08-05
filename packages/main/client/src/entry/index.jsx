import {
	registerMicroApps,
	runAfterFirstMounted,
	setDefaultMountApp,
	start,
	initGlobalState,
} from 'qiankun';
import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from '@router';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import simpleAsync from '@utils/reduxSimpleAsync';
import rootReducer from '../rootReducer';

const { __REDUX_DEVTOOLS_EXTENSION__ } = window;
const store = applyMiddleware(thunk, simpleAsync)(createStore)(
	rootReducer,
	__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__(),
);

const render = (App) => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root'),
	);
};

render(RootRouter);

// 热模块替换
if (process.env.NODE_ENV !== 'production' && module.hot) {
	module.hot.accept('../router/index', () => {
		render(RootRouter);
	});
}

/*
 * qiankun
 *
 * */

registerMicroApps(
	[
		{
			name: 'app1',
			entry:
				process.env.NODE_ENV === 'production'
					? '//app1.abizaeps.com'
					: '//localhost:4001',
			container: '#micro_app',
			activeRule: '/app1',
			loader() {
				console.log('app1 loading');
			},
		},
		{
			name: 'app2',
			entry:
				process.env.NODE_ENV === 'production'
					? '//app2.abizaeps.com'
					: '//localhost:4002',
			container: '#micro_app',
			activeRule: '/app2',
			loader() {
				console.log('app1 loading');
			},
		},
	],
	{
		beforeLoad: [
			(app) => {
				console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
			},
		],
		beforeMount: [
			(app) => {
				console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
			},
		],
		afterMount: [
			(app) => {
				console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name);
			},
		],
		beforeUnmount: [
			(app) => {
				console.log(
					'[LifeCycle] before unmount %c%s',
					'color: green;',
					app.name,
				);
			},
		],
		afterUnmount: [
			(app) => {
				console.log(
					'[LifeCycle] after unmount %c%s',
					'color: green;',
					app.name,
				);
			},
		],
	},
);

const { onGlobalStateChange, setGlobalState } = initGlobalState({
	user: 'qiankun',
});

onGlobalStateChange((value, prev) =>
	console.log('[onGlobalStateChange - master]:', value, prev),
);

setGlobalState({
	ignore: 'master',
	user: {
		name: 'master',
	},
});

/**
 * Step3 设置默认进入的子应用
 */
// setDefaultMountApp('/app1');

/**
 * Step4 启动应用
 */
start({
	prefetch: 'all',
});

runAfterFirstMounted(() => {
	console.log('----------------------------------');
	console.log(process.env.NODE_ENV);
	console.log('----------------------------------');
	console.log('[MainApp] first app mounted');
});
