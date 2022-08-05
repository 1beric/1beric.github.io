import React from "react";
import * as PropTypes from "prop-types";
import { Box, Button, Typography, useTheme } from "@mui/material";
import LoadingBackdrop from "./LoadingBackdrop";
import AboutSection from "../../aboutSection/components/AboutSection";
import ProjectSection from "../../projectSection/components/ProjectSection";
import Background from "./Background";
import SkillsSection from "../../skillsSection/components/SkillsSection";

const Body = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        gap: theme.spacing(2),
        justifyContent: "flex-start",
        alignItems: "center",
        padding: theme.spacing(4),
        background: "transparent",
        zIndex: 1,
        overflow: "hidden auto",
        // width: "100%",
      }}
    >
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
      <LoadingBackdrop />
    </Box>
  );
};

Body.propTypes = {};
Body.defaultProps = {};

export default React.memo(Body);
