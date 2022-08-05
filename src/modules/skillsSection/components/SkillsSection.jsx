import React from "react";
import * as PropTypes from "prop-types";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Section from "../../body/components/Section";
import Timeline from "./Timeline";
import skills from "../util/skills";

const SkillsSection = () => {
  const theme = useTheme();

  return (
    <Section title="Experience">
      <Timeline items={skills} size={4} />
    </Section>
  );
};

SkillsSection.propTypes = {};
SkillsSection.defaultProps = {};

export default React.memo(SkillsSection);
