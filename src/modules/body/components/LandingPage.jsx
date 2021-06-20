import React, { useCallback } from 'react';
import {
	Box,
	Container,
	AppBar,
	Toolbar,
	Typography,
	GridList,
	GridListTile,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import * as BodyContent from '../../body/constants/BodyContent';
import HeaderMenuItem from '../../header/components/HeaderMenuItem';
import LandingPageTile from './LandingPageTile';

import * as selectors from '../../../store/selectors';

const LandingPage = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{BodyContent.images().map(
				(image, i) =>
					i !== 0 && (
						<LandingPageTile image={image} name={BodyContent.values()[i]} />
					),
			)}
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		// backgroundColor: theme.palette.background.paper,
	},
}));

const propTypes = {};

const defaultProps = {};

LandingPage.propTypes = propTypes;
LandingPage.defaultProps = defaultProps;

export default React.memo(LandingPage);
