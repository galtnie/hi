import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  wrapper: {
    width: "100%",
    zIndex: 3,
    // margin: '100vh 0 0',
    marginTop: "100vh",
    marginBottom: "100vh",
    position: "absolute",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    backgroundColor: "white",
    minHeight: '100%' 
  },
}));
