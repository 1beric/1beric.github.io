import React from "react";
import * as PropTypes from "prop-types";
import {
  Box,
  Button,
  LinearProgress,
  Paper,
  Slider,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../../../store/selectors";
import HEADER_TYPES from "../util/headerTypes";
import BODY_TYPES from "../../body/util/bodyTypes";
import actions from "../../../store/actions";

const Header = () => {
  const theme = useTheme();
  const reduxTheme = useSelector(selectors.getTheme);
  const headerType = useSelector(selectors.getHeaderType);

  const dispatch = useDispatch();

  const handleLogoClicked = () => {
    dispatch(actions.goToHome());
  };

  const renderDefault = () => (
    <Box
      sx={{
        display: "flex",
        gap: theme.spacing(2),
        alignItems: "center",
      }}
    >
      <Typography variant="h4" color="primary">
        1BERIC
      </Typography>
      <Button variant="contained" href="https://github.com/1beric">
        Github
      </Button>
    </Box>
  );

  const renderHeaderComponent = () => {
    switch (headerType) {
      case HEADER_TYPES.DEFAULT:
        return renderDefault();
      default:
        return null;
    }
  };

  return (
    <Paper
      sx={{
        display: "flex",
        height: 96,
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        backgroundColor:
          theme.palette.mode === "light" && theme.palette.secondary.main,
        position: "relative",
      }}
    >
      {renderHeaderComponent()}
    </Paper>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default React.memo(Header);
