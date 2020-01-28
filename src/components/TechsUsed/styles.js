import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  main: {
    paddingTop: '6rem',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  description: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    padding: "0 15%",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: "1.875rem",
    fontSize: "2.25rem",
    fontWeight: 600,
    letterSpacing: "1.5px",
    color: "#000",
    boxSizing: "border-box"
  },
  text: {
    width: "100%",
    padding: "0 18%",
    color: theme.palette.grey.dark,
    textAlign: "center",
    fontSize: "1.125rem",
    marginBottom: "2.5rem",
    fontWeight: "400",
    lineHeight: "1.5rem"
  },
  cardContainer: {
    width: '65rem',
    height: '30rem',
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: "wrap",
    alignContent: "flex-start",
  },
  card: {
    width: '15rem',
    height: '11rem',
    listStyle: 'none',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '0.5rem',
    boxShadow: '0 2rem 2rem 0 rgba(0, 0, 0, 0.05), 0 1rem 1.5rem 0 rgba(0, 0, 0, 0.05)',
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    height: '6rem'
  },
  buttonWrapper: {
    width: 'auto',
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none"
  },
  button: {
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: "0.5rem",
    textTransform: "none",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    "&:hover": {
      borderColor: theme.palette.primary.main,
      color: "white",
      backgroundColor: theme.palette.primary.main,
    },
    "&:active": {
      borderColor: theme.palette.primary.main,
      color: "white",
      backgroundColor: theme.palette.primary.main,
    },
  },
}));
