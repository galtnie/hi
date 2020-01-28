import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  main: {
    backgroundImage: "linear-gradient(to left top, #673ab7, #3d5afe)",
    height: "100vh",
    maxHeight: "200vh",
    minHeight: "100vh",
    width: "100vw",
    maxWidth: "100%",
    minWidth: "100%",
    color: "#fff",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1
  },
  main_highZindex: {
    zIndex: 2
  },
  main_smallDevice: {
    position: "static"
  },
}));
