import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  main: {
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
    paddingBottom: "0",
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
  },
  highZindex: {
    zIndex: 2
  }
}));
