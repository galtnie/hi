import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none"
  },
  button: {
    margin: "2rem",
    color: "white",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "0.5rem",
    fontWeight: "bold",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    textTransform: "none",
    backgroundImage: `linear-gradient( to left top,
    ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    "&:hover": {
      backgroundImage: "none",
      backgroundColor: "white",
      color: "#3f51b5",
      border: `1px solid ${theme.palette.secondary.main}`
    }
  }
}));
