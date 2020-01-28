import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  upperContainer_wrapper: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative"
  },
  upperContainer_title: {
    fontSize: '3rem',
    marginBottom: '1.875rem',
    textAlign: 'center'
  },
  upperContainer_text: {
    padding: '0 15%',
    fontSize: '1.5rem',
    textAlign: 'center'
  }
}))
    