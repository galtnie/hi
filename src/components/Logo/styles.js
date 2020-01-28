import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  main: {
    textDecoration: "none",
    color: "white",
    paddingBottom: "0.1rem",

    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none"
    },
    "&.selectedLink": {
      borderBottom: "0.1em solid white"
    }
  },
  mainFooter: {
    color: theme.palette.grey.main,
    "&.selectedLink": {
      borderBottom: "none"
    }
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));
