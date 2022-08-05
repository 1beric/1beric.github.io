import React from "react";
import * as PropTypes from "prop-types";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Section from "../../body/components/Section";
import TimelineDot from "./TimelineDot";

const Timeline = ({ items, size }) => {
  const theme = useTheme();

  const renderItems = () =>
    items.map((item, index) => (
      <TimelineDot
        key={item.id}
        {...item}
        position={(index + 0.5) / items.length}
        direction={index % 2 ? "left" : "right"}
      />
    ));

  return (
    <Box
      sx={{
        // height: theme.spacing(32),
        display: "flex",
        justifyContent: "center",
        // flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: size,
          height: theme.spacing(64),
          position: "relative",
          background: theme.palette.primary.main,
        }}
      >
        {renderItems()}
      </Box>
    </Box>
  );
};

Timeline.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  size: PropTypes.number,
};
Timeline.defaultProps = {
  size: 8,
};

export default React.memo(Timeline);
