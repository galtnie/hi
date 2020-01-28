import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    boxShadow: "none",
  },
  bar: {
    padding: 0
  },
  title: {
    flexGrow: 1
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    opacity: 1,
    WebkitAnimation: 'none',
    animation: 'none',
    visibility: 'visible',
    fontweight: 'bold',
    margin: 0,
    padding: 0,
  },
  item: {
    listStyle: 'none',
    marginRight: "1.8rem",
    cursor: 'pointer',
  },
  last: {
    marginRight: 0,
  },
  link: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    fontStretch: '100%',
    textDecoration: "none",
    color: "white",
    paddingBottom: "0.1rem",
    "&:focus, &:hover, &:visited, &:link, &:active": {
      textDecoration: "none"
    },
    "&.selectedLink": {
      borderBottom: "0.1em solid white"
    }
  }
}));
