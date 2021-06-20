import * as actionTypes from './actionTypes';

export const setBodyContent = value => {
	const payload = {
		value,
	};
	return acSetBodyContent(payload);
};

const acSetBodyContent = payload => ({
	type: actionTypes.SET_BODY_CONTENT,
	payload,
});
