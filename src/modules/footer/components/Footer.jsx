// react and external imports
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { makeStyles } from '@material-ui/core';

// internal imports
import * as selectors from '../../../store/selectors';
import * as actions from '../../../store/actions';
import * as BodyContent from '../../body/constants/BodyContent';

const Footer = () => {
	// local state

	// selectors
	const showingLandingPage = useSelector(selectors.isShowingLandingPage);

	// dispatches
	const dispatch = useDispatch();

	const returnHome = () =>
		dispatch(actions.setBodyContent(BodyContent.LANDING_PAGE));
	const scrollToTop = () =>
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});

	const classes = useStyles();

	console.log(showingLandingPage);

	return (
		<React.Fragment>
			<div className={classes.rootHidden} />
			<div className={classes.root}>
				{!showingLandingPage && (
					<React.Fragment>
						<Button className={classes.footerButton} onClick={scrollToTop}>
							<ArrowUpwardIcon className={classes.footerIcon} />
						</Button>
						<Button className={classes.footerButton} onClick={returnHome}>
							<HomeIcon className={classes.footerIcon} />
						</Button>
					</React.Fragment>
				)}
			</div>
		</React.Fragment>
	);
};

const useStyles = makeStyles(theme => ({
	root: {
		position: 'fixed',
		bottom: 0,
		width: '100vw',
		height: '7.5vh',
		display: 'flex',
		flexGrow: 1,
		zIndex: 10,
		boxShadow: '0px -1px 8px #000',
		backgroundColor: theme.palette.header.main,
	},
	rootHidden: {
		height: '7.5vh',
	},
	footerButton: {
		flexGrow: 1,
		backgroundColor: theme.palette.header.main,
		borderRadius: 0,
		'&:hover': {
			backgroundColor: theme.palette.header.dark,
		},
	},
	footerIcon: {
		color: theme.palette.header.contrast,
	},
}));

const propTypes = {};

const defaultProps = {};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default React.memo(Footer);
