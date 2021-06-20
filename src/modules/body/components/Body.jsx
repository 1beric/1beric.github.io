import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';

import * as selectors from '../../../store/selectors';
import * as BodyContent from '../constants/BodyContent';

const Body = () => {
	const bodyContent = useSelector(selectors.getBodyContent);

	const classes = useStyles();

	return (
		<Container className={classes.root}>
			{BodyContent.component(bodyContent)}
		</Container>
	);
};
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.bodyBackground.main,
	},
}));

const propTypes = {};

const defaultProps = {};

Body.propTypes = propTypes;
Body.defaultProps = defaultProps;

export default React.memo(Body);
