import React, { useCallback } from 'react';
import {
	Box,
	Container,
	AppBar,
	Toolbar,
	Typography,
	Tab,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import ApplicationMenu from './ApplicationMenu';
import * as BodyContent from '../../body/constants/BodyContent';
import * as selectors from '../../../store/selectors';
import * as actions from '../../../store/actions';

const HeaderMenuItem = ({ name }) => {
	const classes = useStyles();

	const bodyContent = useSelector(selectors.getBodyContent);

	const dispatch = useDispatch();

	const handleClick = () => {
		if (bodyContent !== name) dispatch(actions.setBodyContent(name));
	};

	return (
		<Tab
			label={name}
			value={name}
			className={bodyContent === name ? classes.selectedTitle : classes.title}
			onClick={handleClick}
			disableRipple={true}
		/>
	);
};

const useStyles = makeStyles(theme => ({
	title: {
		padding: '4px 25px',
		margin: '0px 6px',
		borderRadius: 12,
		textAlign: 'center',
		color: theme.palette.header.contrast,
		fontSize: 18,
		border: '2px solid ' + theme.palette.header.main,
		whiteSpace: 'nowrap',
		'&:hover': {
			backgroundColor: theme.palette.header.dark,
			cursor: 'pointer',
		},
	},
	selectedTitle: {
		padding: '4px 25px',
		margin: '0px 6px',
		borderRadius: 12,
		textAlign: 'center',
		color: theme.palette.header.contrast,
		border: '2px solid ' + theme.palette.header.dark,
		fontSize: 18,
		whiteSpace: 'nowrap',
		'&:hover': {
			backgroundColor: theme.palette.header.dark,
			cursor: 'pointer',
		},
	},
}));

const propTypes = {
	name: PropTypes.string,
};

const defaultProps = {
	name: 'UNSET',
};

HeaderMenuItem.propTypes = propTypes;
HeaderMenuItem.defaultProps = defaultProps;

export default React.memo(HeaderMenuItem);
