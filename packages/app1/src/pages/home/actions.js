import { fromJS } from 'immutable';
import * as constant from './actionsTypes';

// fetch test
const Test = (data) => ({
	type: constant.FETCH_TEST,
	data,
});
export const fetchTest =
	(data = 'null') =>
	(dispatch) => {
		dispatch(Test(fromJS(data)));
	};
