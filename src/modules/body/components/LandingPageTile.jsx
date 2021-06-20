import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { fade } from '@material-ui/core/styles/colorManipulator';

import * as BodyContent from '../../body/constants/BodyContent';
import HeaderMenuItem from '../../header/components/HeaderMenuItem';

import * as selectors from '../../../store/selectors';
import * as actions from '../../../store/actions';

const LandingPage = ({ image, name }) => {
	const classes = useStyles();

	const bodyContent = useSelector(selectors.getBodyContent);

	const dispatch = useDispatch();

	const handleClick = () => {
		if (bodyContent !== name) dispatch(actions.setBodyContent(name));
	};

	return (
		<div className={classes.root}>
			<img className={classes.img} src={image} alt={image} />
			<div className={classes.imgCover} onClick={handleClick} />
			<p className={classes.imgText}>{name}</p>
		</div>
	);
};

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
		textAlign: 'center',
	},
	img: {
		// marginLeft: 'auto',
		// marginRight: 'auto',
		margin: '16px 32px',
		height: 400,
		borderRadius: 12,
		// opacity: 0.9,
		width: 'auto',
	},
	imgCover: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: 'calc(100% - 64px)',
		height: 400,
		margin: '16px 32px',
		borderRadius: 12,
		backgroundColor: fade(theme.palette.bodyBackground.contrast, 0),
		'&:hover': {
			cursor: 'pointer',
			backgroundColor: fade(theme.palette.bodyBackground.contrast, 0.2),
		},
	},
	imgText: {
		display: 'block',
		margin: 0,
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		padding: 10,
		borderRadius: 12,
		color: theme.palette.bodyBackground.contrast,
		backgroundColor: fade(theme.palette.bodyBackground.dark, 0.7),
		fontWeight: 100,
		fontSize: 42,
		pointerEvents: 'none',
	},
}));

const propTypes = {};

const defaultProps = {};

LandingPage.propTypes = propTypes;
LandingPage.defaultProps = defaultProps;

export default React.memo(LandingPage);
