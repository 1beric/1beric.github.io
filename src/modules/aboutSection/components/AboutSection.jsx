import React from "react";
import * as PropTypes from "prop-types";
import { Box, Button, Tooltip, Typography, useTheme } from "@mui/material";
import GitHub from "@mui/icons-material/GitHub";
import Article from "@mui/icons-material/Article";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import Phone from "@mui/icons-material/Phone";

import Section from "../../body/components/Section";
import about from "../util/about";

const AboutSection = () => {
  const theme = useTheme();

  const handlEmail = () => {
    window.location.href = "mailto:brandonscotterickson@gmail.com";
  };

  const handleCall = () => {
    window.location.href = "tel:6194030190";
  };

  return (
    <Section title="About">
      <Typography variant="body1">{about.bio}</Typography>
      <Box
        sx={{ display: "flex", gap: theme.spacing(1), alignItems: "center" }}
      >
        <Email color="primary" />
        <Tooltip title="Email" placement="right" arrow>
          <Typography
            variant="body1"
            onClick={handlEmail}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            brandonscotterickson@gmail.com
          </Typography>
        </Tooltip>
      </Box>
      <Box
        sx={{ display: "flex", gap: theme.spacing(1), alignItems: "center" }}
      >
        <Phone color="primary" />
        <Tooltip title="Call" placement="right" arrow>
          <Typography
            variant="body1"
            onClick={handleCall}
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            +1 (619) 403-0190
          </Typography>
        </Tooltip>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          // justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing(2),
          overflowY: "auto",
        }}
      >
        <Button
          variant="contained"
          component="a"
          href="https://github.com/1beric"
          startIcon={<GitHub />}
        >
          Github
        </Button>
        <Button
          variant="contained"
          component="a"
          href="https://www.linkedin.com/in/brandonscotterickson/"
          startIcon={<LinkedIn />}
        >
          LinkedIn
        </Button>
        <Button
          variant="contained"
          component="a"
          href={`${process.env.PUBLIC_URL}/BrandonEricksonResume.pdf`}
          startIcon={<Article />}
          download
        >
          Resume
        </Button>
      </Box>
    </Section>
  );
};

AboutSection.propTypes = {};
AboutSection.defaultProps = {};

export default React.memo(AboutSection);
