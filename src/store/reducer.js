import * as actionTypes from './actionTypes';
import * as BodyContent from '../modules/body/constants/BodyContent';

const initialState = {
	bodyContent: BodyContent.LANDING_PAGE,
};

const setBodyContent = (state, { payload: { value } }) => {
	console.log('setting body content to ', value);

	return {
		...state,
		bodyContent: value,
	};
};

const reducer = (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case actionTypes.SET_BODY_CONTENT:
			return setBodyContent(state, action);

		default:
			return state;
	}
};

export default reducer;
