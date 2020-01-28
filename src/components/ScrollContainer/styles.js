import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  main: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));
