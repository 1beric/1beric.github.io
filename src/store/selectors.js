import { createSelector } from 'reselect';

import * as BodyContent from '../modules/body/constants/BodyContent';

export const getBodyContent = createSelector(
	[state => state.bodyContent],
	bodyContent => bodyContent,
);
export const isShowingLandingPage = createSelector(
	[state => state.bodyContent],
	bodyContent => bodyContent === BodyContent.LANDING_PAGE,
);
