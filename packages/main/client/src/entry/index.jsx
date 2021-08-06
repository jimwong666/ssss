import {
	registerMicroApps,
	runAfterFirstMounted,
	setDefaultMountApp,
	start,
	initGlobalState,
	addGlobalUncaughtErrorHandler,
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
// if (process.env.NODE_ENV !== 'production' && module.hot) {
// 	module.hot.accept('../router/index', () => {
// 		render(RootRouter);
// 	});
// }

/*
 * qiankun
 *
 * */

registerMicroApps(
	[
		{
			name: 'app1',
			entry: process.env.NODE_ENV === 'production' ? '//app1.abizaeps.com' : '//localhost:4001',
			container: '#micro_app',
			activeRule: '/app1',
			loader() {
				console.log('app1 loading');
			},
		},
		{
			name: 'app2',
			entry: process.env.NODE_ENV === 'production' ? '//app2.abizaeps.com' : '//localhost:4002',
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
				console.log('[LifeCycle] beforeLoad 生命周期', app.name);
			},
		],
		beforeMount: [
			(app) => {
				console.log('[LifeCycle] beforeMount 生命周期', app.name);
			},
		],
		afterMount: [
			(app) => {
				console.log('[LifeCycle] afterMount 生命周期', app.name);
			},
		],
		beforeUnmount: [
			(app) => {
				console.log('[LifeCycle] beforeUnmount 生命周期', app.name);
			},
		],
		afterUnmount: [
			(app) => {
				console.log('[LifeCycle] afterUnmount 生命周期', app.name);
			},
		],
	},
);

/**
 * 全局变量
 */
const { onGlobalStateChange, setGlobalState } = initGlobalState({
	user: 'qiankun',
});

onGlobalStateChange((value, prev) => console.log('全局变量变动触发', value, prev));

setGlobalState({
	ignore: 'master',
	user: {
		name: 'master',
	},
});

/**
 * 添加全局的未捕获异常处理
 */
const handler = function (e) {
	console.log('未捕获的异常：');
	console.log(e);
};
addGlobalUncaughtErrorHandler(handler);

/**
 * 启动应用
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
