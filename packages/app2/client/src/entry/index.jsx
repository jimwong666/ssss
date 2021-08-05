import React from 'react';
import ReactDOM from 'react-dom';
import RootRouter from '@router';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import simpleAsync from '@utils/reduxSimpleAsync';
import rootReducer from '../rootReducer';

const { __REDUX_DEVTOOLS_EXTENSION__, __POWERED_BY_QIANKUN__ } = window;
const store = applyMiddleware(thunk, simpleAsync)(createStore)(
	rootReducer,
	__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__(),
);

const render = (App, el) => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		el,
	);
};

if (!__POWERED_BY_QIANKUN__)
	render(RootRouter, document.getElementById('root2'));

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
	console.log('react app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
	render(
		RootRouter,
		props.container
			? props.container.querySelector('#root2')
			: document.getElementById('root2'),
	);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
	ReactDOM.unmountComponentAtNode(
		props.container
			? props.container.querySelector('#root2')
			: document.getElementById('root2'),
	);
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
	console.log('update props', props);
}