import React from "react";
import { Paper, ThemeProvider } from "@mui/material";
import { Provider, useSelector } from "react-redux";
import store from "../../../store";
import selectors from "../../../store/selectors";
import themes from "../../../util/theme";
import Body from "../../body/components/Body";
import Header from "../../header/components/Header";
import Background from "../../body/components/Background";

const AppBase = () => {
  return (
    <Paper
      elevation={0}
      square
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Background />
      <Header />
      <Body />
    </Paper>
  );
};

const ThemeWrapper = () => {
  const theme = useSelector(selectors.getTheme);
  return (
    <ThemeProvider theme={themes[theme]}>
      {/* <ThemeProvider theme={themes[theme]}> */}
      <AppBase />
    </ThemeProvider>
  );
};

const ReduxWrapper = () => {
  return (
    <Provider store={store}>
      <ThemeWrapper />
    </Provider>
  );
};

const App = ReduxWrapper;

export default App;
