import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  main: {
    width: '54.375rem',
    maxWidth: '54.375rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: '2.25rem',
    textTransform: 'uppercase'
  },
  upperWrapper: {
    marginTop: '1rem',
    width: '90%',
    '&>div': {
      margin: '0 1rem'
    }
  },
  inputWrapper: {
    width: 'calc( 50% - 2rem)',
    '& input': {
      height: '2.5rem !important',
      minHeight: '2.5rem',
      padding: 0
    }
  },
  lowerWrapper: {
    marginTop: '1rem',
    width: '90%',
    padding: '0 1rem',
    '&>div': {
      width: '100%'
    },
    '& textarea': {
      width: '100%'
    }
  }
}));