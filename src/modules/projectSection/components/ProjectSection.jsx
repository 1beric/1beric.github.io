import React from "react";
import * as PropTypes from "prop-types";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Section from "../../body/components/Section";
import Project from "./Project";
import projects from "../../body/util/projects";

const ProjectSection = () => {
  const theme = useTheme();

  return (
    <Section title="Projects">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: theme.spacing(2),
          // overflowY: "auto",
        }}
      >
        {Object.values(projects).map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </Box>
    </Section>
  );
};

ProjectSection.propTypes = {};
ProjectSection.defaultProps = {};

export default React.memo(ProjectSection);
