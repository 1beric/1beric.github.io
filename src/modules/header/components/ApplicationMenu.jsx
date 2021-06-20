import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Zoom from '@material-ui/core/Zoom';
import { IconButton, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	icon: {
		color: theme.palette.common.white,
	},
}));

export default function ApplicationMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const classes = useStyles();

	return (
		<div>
			<IconButton
				aria-label='menu'
				aria-controls='zoom-menu'
				aria-haspopup='true'
				color='inherit'
				edge='start'
				className={classes.menuButton}
				onClick={handleClick}
			>
				<MenuIcon className={classes.icon} />
			</IconButton>
			<Menu id='zoom-menu' anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} TransitionComponent={Zoom}>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</div>
	);
}
