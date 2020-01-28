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
  main_highZindex: {
    zIndex: 2
  },
  main_smallDevice: {
    height: "auto",
    position: 'static',
    paddingBottom: "5rem"
  },
  upper: {
    height: '70vh',
    flexDirection: 'column',
    boxSizing: 'border-box',
    display: 'flex',
    placeContent: 'center',
    alignItems: 'center',
  },
  lower: {
    height: '30vh'
  },
  container_smallDevice: {
    height: 'auto'
  }
}));
