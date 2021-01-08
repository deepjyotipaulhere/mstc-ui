import "../styles/globals.css";

import { createMuiTheme, ThemeProvider, Button } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2d2c87",
    },
    secondary: {
      main: '#00FFFF',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
