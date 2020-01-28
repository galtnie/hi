import { createMuiTheme } from "@material-ui/core";
import { indigo, deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xl: 1920,
      lg: 1120,
      md: 960,
      sm: 600,
      xs: 0
    }
  },
  palette: {
    primary: {
      main: deepPurple[500]
    },
    secondary: {
      main: indigo["A400"]
    },
    grey: {
      main: "#7f8fab",
      bold: "#8090ab",
      dark: "#536179"
    }
  },
  "@global": {
    "html, body, #root": {
      width: "100%"
    }
  },
  typography: {
    fontFamily: [
      "Montserrat",
      "Montserrat-Bold",
      "Montserrat-Thin",
      "Montserrat-Light",
      "Helvetica",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    fontSize: 18,
    lineHeight: "24px"
  }
});

export const useStyles = makeStyles(theme => ({
  main: {
    maxWidth: "100vw",
    padding: 0,
    margin: 0
  }
}));
