import React from "react";
import * as PropTypes from "prop-types";
import {
  Backdrop,
  Box,
  CircularProgress,
  Paper,
  useTheme,
} from "@mui/material";
import { useSelector } from "react-redux";
import selectors from "../../../store/selectors";

const Background = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,

        background: `url(${process.env.PUBLIC_URL}/forestBackground.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "blur(12px)",
      }}
    />
  );
};

Background.propTypes = {};
Background.defaultProps = {};

export default React.memo(Background);
