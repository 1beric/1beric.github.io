import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#7e8e52",
      main: "#5f6b3e",
      dark: "#505B34",
      // contrastText: "#000",
    },
    secondary: {
      light: "#6b8ba6",
      main: "#6b8ba6",
      dark: "#4d6880",
      // contrastText: "#000",
    },
  },
  typography: {
    allVariants: {
      color: "#FFFFFFF0",
    },
  },
});

export default darkTheme;
