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
import ParkIcon from "@mui/icons-material/Park";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../../../store/selectors";
import HEADER_TYPES from "../util/headerTypes";
import BODY_TYPES from "../../body/util/bodyTypes";
import actions from "../../../store/actions";
import isMobile from "../../../util/platform";

const Header = () => {
  const theme = useTheme();
  const reduxTheme = useSelector(selectors.getTheme);
  const headerType = useSelector(selectors.getHeaderType);

  const dispatch = useDispatch();

  const handleLogoClicked = () => {
    dispatch(actions.goToHome());
  };

  const renderHomeButton = () => (
    <Paper
      sx={{
        display: "flex",
        height: 96,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        gap: theme.spacing(2),
        alignItems: "center",
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      }}
    >
      <Typography
        variant="h4"
        color="primary"
        onClick={handleLogoClicked}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: theme.spacing(1),
          transition: "color 100ms",
          cursor: "pointer",
          "&:hover": { color: theme.palette.primary.light },
        }}
      >
        <ParkIcon fontSize="large" /> Brandon Erickson
      </Typography>
    </Paper>
  );

  const renderNavBar = () => (
    <Paper
      sx={{
        display: "flex",
        height: 48,
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        flexGrow: 1,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor:
          theme.palette.mode === "light" && theme.palette.secondary.main,
        position: "relative",
      }}
    >
      <Typography
        variant="h6"
        // color="primary"
        sx={{ display: "flex", alignItems: "center", gap: theme.spacing(1) }}
      >
        About
      </Typography>
    </Paper>
  );

  return (
    <Paper
      sx={{
        display: "flex",
        height: 96,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        backgroundColor: theme.palette.primary.main,
        position: "relative",
      }}
    >
      <Typography
        variant={isMobile() ? "h4" : "h3"}
        // color="primary"
        // onClick={handleLogoClicked}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: theme.spacing(1),
          transition: "color 100ms",
          // cursor: "pointer",
          // "&:hover": { color: theme.palette.primary.light },
        }}
      >
        Brandon Erickson
      </Typography>
    </Paper>
  );
  // return (
  //   <Box
  //     sx={{
  //       display: "flex",
  //       height: 96,
  //       // alignItems: "center",
  //       justifyContent: "space-between",
  //       borderTopRightRadius: 0,
  //       borderTopLeftRadius: 0,
  //       backgroundColor:
  //         theme.palette.mode === "light" && theme.palette.secondary.main,
  //       position: "relative",
  //     }}
  //   >
  //     {renderHomeButton()}
  //     {renderNavBar()}
  //   </Box>
  // );
};

Header.propTypes = {};
Header.defaultProps = {};

export default React.memo(Header);
