import React from "react";
import * as PropTypes from "prop-types";

import {
  Paper,
  Typography,
  Box,
  Button,
  useTheme,
  ButtonGroup,
  Divider,
  Tooltip,
} from "@mui/material";
import Code from "@mui/icons-material/Code";
import isMobile from "../../../util/platform";

const Project = ({ project }) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        gap: theme.spacing(1),
        maxWidth: isMobile()
          ? `calc(100% - ${theme.spacing(5)})`
          : `calc(50% - ${theme.spacing(5)})`,
      }}
      elevation={2}
    >
      <Typography variant="h6" color="primary">
        {project.title}
        <Typography
          variant="subtitle2"
          color="textSecondary"
          component="span"
          sx={{ marginLeft: theme.spacing(1) }}
        >
          {project.date}
        </Typography>
      </Typography>
      <Typography variant="body1">{project.description}</Typography>
      <ButtonGroup
        component={Paper}
        orientation="horizontal"
        variant="contained"
        sx={{
          alignSelf: "start",
        }}
        elevation={3}
      >
        <Button href={project.website} startIcon={project.icon}>
          Project site
        </Button>
        <Button href={project.github} startIcon={<Code />}>
          Repository
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};
Project.defaultProps = {};

export default React.memo(Project);
