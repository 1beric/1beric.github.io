import React from "react";
import * as PropTypes from "prop-types";
import { useState } from "react";
import { Box, Button, Tooltip, Typography, useTheme } from "@mui/material";
import Section from "../../body/components/Section";

const TimelineDot = ({ id, title, date, description, position, direction }) => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getPlacement = () => {
    switch (direction) {
      case "left":
        return {
          position: "absolute",
          left: theme.spacing(-1),
          top: `${Math.round(position * 100)}%`,
          transform: `translate(-100%, -50%)`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            transform: `translate(100%, -50%)`,
            right: 0,
            height: 2,
            width: theme.spacing(1),
            background: theme.palette.primary.main,
          },
        };
      case "right":
        return {
          position: "absolute",
          right: theme.spacing(-1),
          top: `${Math.round(position * 100)}%`,
          transform: `translate(100%, -50%)`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: "50%",
            transform: `translate(-100%, -50%)`,
            left: 0,
            height: 2,
            width: theme.spacing(1),
            background: theme.palette.primary.main,
          },
        };
      case "top":
        return {
          position: "absolute",
          left: `${Math.round(position * 100)}%`,
          top: theme.spacing(-1),
          transform: `translate(-50%, -100%)`,
          "&::before": {
            content: '""',
            position: "absolute",
            left: "50%",
            transform: `translate(-50%, 100%)`,
            bottom: 0,
            height: theme.spacing(1),
            width: 2,
            background: theme.palette.primary.main,
          },
        };
      case "bottom":
        return {
          position: "absolute",
          left: `${Math.round(position * 100)}%`,
          bottom: theme.spacing(-1),
          transform: `translate(-50%, 100%)`,
          "&::before": {
            content: '""',
            position: "absolute",
            left: "50%",
            transform: `translate(-50%, -100%)`,
            top: 0,
            height: theme.spacing(1),
            width: 2,
            background: theme.palette.primary.main,
          },
        };
      default:
        return {};
    }
  };
  return (
    <Tooltip
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      title={
        <Box>
          <Typography variant="caption">{date}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      }
      arrow
      placement={direction}
    >
      <Box
        sx={{
          ...getPlacement(),
          padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
          borderRadius: theme.spacing(1),
          background: theme.palette.primary.main,
        }}
      >
        <Typography
          variant="subtitle2"
          textAlign="center"
          sx={{ cursor: "default" }}
        >
          {title}
        </Typography>
      </Box>
    </Tooltip>
  );
};

TimelineDot.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  direction: PropTypes.string,
};
TimelineDot.defaultProps = {
  direction: "bottom",
};

export default React.memo(TimelineDot);
