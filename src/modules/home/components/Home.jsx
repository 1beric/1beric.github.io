import React from "react";
import * as PropTypes from "prop-types";
import { Paper, Typography, Box, Button, useTheme } from "@mui/material";
import projects from "../util/projects";
import CodeIcon from "@mui/icons-material/Code";
import LinkIcon from "@mui/icons-material/Link";

const Home = () => {
  const theme = useTheme();

  const renderProject = (project) => (
    <Paper
      elevation={2}
      sx={{
        display: "flex",
        gap: theme.spacing(1),
        padding: theme.spacing(1),
        alignItems: "center",
      }}
    >
      <Typography color="primary" sx={{ marginRight: theme.spacing(1) }}>
        {project.title}
      </Typography>
      <Button
        href={project.website}
        variant="contained"
        sx={{ minWidth: 0, padding: theme.spacing(0.75), borderRadius: "50%" }}
      >
        <LinkIcon />
      </Button>
      <Button
        href={project.github}
        variant="contained"
        sx={{ minWidth: 0, padding: theme.spacing(0.75), borderRadius: "50%" }}
      >
        <CodeIcon />
      </Button>
    </Paper>
  );

  const renderProjects = () => Object.values(projects).map(renderProject);

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.spacing(2),
        padding: theme.spacing(2),
        maxWidth: "60%",
        width: "fit-content",
        minWidth: 256,
        maxHeight: "-webkit-fill-available",
      }}
    >
      <Typography variant="h5">Projects</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing(2),
          overflowY: "auto",
        }}
      >
        {renderProjects()}
      </Box>
    </Paper>
  );
};

Home.propTypes = {};
Home.defaultProps = {};

export default React.memo(Home);
