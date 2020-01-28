import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  main: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    position: "relative"
  },
  text: {
    width: "40%",
    fontWeight: 700,
    fontSize: "2.25rem",
    lineHeight: "3.125rem",
    textTransform: "initial",
    textAlign: "left",
    padding: 0,
    marginBottom: "5rem"
  },
  image: {
    marginBottom: 0,
    width: 710,
    height: 550,
    position: "absolute",
    top: "50%",
    right: 0,
    WebkitTransform: "translateY(-50%)",
    transform: "translateY(-50%)",
    transition: "opacity .3s ease-in-out"
  },
  button: {
    color: theme.palette.secondary.main,
    backgroundColor: "white",
    border: "2px solid white",
    textTransform: "none",
    "&:hover": {
      color: "white",
      backgroundColor: theme.palette.secondary.main
    }
  }
}));
