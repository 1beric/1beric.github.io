import React from "react";
import * as PropTypes from "prop-types";

import { Paper, Typography, useTheme } from "@mui/material";
import isMobile from "../../../util/platform";

const Section = ({ title, children }) => {
  const theme = useTheme();

  const renderTitle = () => {
    if (typeof title === "string") {
      return <Typography variant="h5">{title}</Typography>;
    }
    return title;
  };

  const getSx = () =>
    isMobile()
      ? {
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          gap: theme.spacing(2),
          padding: theme.spacing(2),
          width: "100%",
          // width: "fit-content",
          minWidth: 256,
        }
      : {
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          gap: theme.spacing(2),
          padding: theme.spacing(2),
          maxWidth: "60%",
          width: "60%",
          // width: "fit-content",
          minWidth: 256,
          // maxHeight: "-webkit-fill-available",
        };

  return (
    <Paper sx={getSx()}>
      {renderTitle()}
      {children}
    </Paper>
  );
};

Section.propTypes = {
  title: PropTypes.node,
  children: PropTypes.node,
};
Section.defaultProps = {
  title: "",
  children: null,
};

export default React.memo(Section);
