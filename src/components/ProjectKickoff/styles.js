import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 500,
    fontSize: "2.25rem",
    padding: "0 3%",
    marginBottom: "1.875rem",
    lineHeight: "3rem"
  },

  text: {
    fontSize: "1.125rem",
    fontWeight: 400,
    textAlign: 'center',
    padding: '0px 25%'
  }
}));
