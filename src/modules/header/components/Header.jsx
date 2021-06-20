import React, { useCallback, useState } from 'react';
import {
	Box,
	Container,
	AppBar,
	Tabs,
	Typography,
	Tab,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';

import ApplicationMenu from './ApplicationMenu';
import * as BodyContent from '../../body/constants/BodyContent';
import HeaderMenuItem from './HeaderMenuItem';
import * as selectors from '../../../store/selectors';

const Header = () => {
	const bodyContent = useSelector(selectors.getBodyContent);

	const classes = useStyles();

	const listMenuItems = () => {
		return BodyContent.values().map((name, i) => (
			<HeaderMenuItem key={`menu_${i}`} name={name} />
		));
	};

	return (
		<React.Fragment>
			<div className={classes.rootHidden} />
			<div className={classes.rootFixed}>
				<AppBar position='static' elevation={0} className={classes.bar}>
					<p className={classes.logoName}>Brandon Erickson</p>
					<Tabs
						style={{ height: '70%' }}
						variant='scrollable'
						scrollButtons='on'
						value={bodyContent}
						aria-label='header'
						TabScrollButtonProps={{
							className: classes.barArrow,
						}}
					>
						{/* <ApplicationMenu /> */}
						{listMenuItems()}
					</Tabs>
				</AppBar>
			</div>
		</React.Fragment>
	);
};

const useStyles = makeStyles(theme => ({
	rootFixed: {
		flexGrow: 1,
		position: 'fixed',
		width: '100vw',
		height: '10vh',
		zIndex: 10,
		boxShadow: '0px 1px 8px #000',
	},
	rootHidden: {
		height: '10vh',
		flexGrow: 1,
	},
	logoName: {
		padding: '12px 24px',
		textAlign: 'center',
		fontSize: 36,
		margin: 0,
		display: 'block',
		color: theme.palette.header.contrast,
	},
	bar: {
		backgroundColor: theme.palette.header.main,
		height: '100%',
		// padding: '0px 10vw',
	},
	barArrow: {
		color: theme.palette.header.contrast,
		borderRadius: 12,
		height: '84%',
		'&:hover': {
			backgroundColor: theme.palette.header.dark,
		},
	},
}));

const propTypes = {};

const defaultProps = {};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default React.memo(Header);
