import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: '#fafafa',
    width: '100%'
  },
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
  listWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "10rem",
    marginTop: "5rem",
  },
  listContainer: {
    width: "100%",
    height: "3rem",
    marginTop: "2rem",
    marginBottom: "10rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    textDecoration: "none"
  },
}));