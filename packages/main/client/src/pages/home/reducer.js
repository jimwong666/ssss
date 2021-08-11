import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { withAsyncReducer } from '@utils/reduxSimpleAsync';
import * as constant from './actionsTypes';

// 中间件
const testFetch = withAsyncReducer(constant.FETCH_TEST);

// 自定义1
const customTestFetchDefauleValue = fromJS({
	status: false,
	data: [0, 1, 2, 3],
	txt: 0,
});
const customTestFetch = (state = customTestFetchDefauleValue, action) => {
	switch (action.type) {
		case constant.FETCH_TEST:
			return state.set('status', !state.get('status')).set('txt', action.data.get('txt'));
		default:
			return state;
	}
};

export default combineReducers({
	testFetch,
	customTestFetch,
});
