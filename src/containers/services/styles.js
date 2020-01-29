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
  },

  service_wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  service_main: {
    width: '54.375rem',
    maxWidth: '54.375rem',
    backgroundColor: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingBottom: "3.125rem",
  },
  service_subContainerWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  service_subContainer: {
    width: '42%',
    maxWidth: '42%',
    transform: 'scale(1.05)'
  },
  service_subContainer_large: {
    width: '50%',
    maxWidth: '50%',
    transform: 'scale(1.15)'
  },
  service_title: {
    marginBottom: '1.875rem',
    fontSize: '2.25rem',
    fontWeight: 600,
    letterSpacing: '1.5px',
    color: '#000',
    boxSizing: 'border-box',
  },
  service_text: {
    fontSize: '1.125rem',
    marginBottom: '2.5rem',
    fontWeight: '400',
    lineHeight: '1.5rem',
  }, 
  service_button: {
    marginTop: '1rem',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    textTransform: 'none',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    borderRadius: "0.5rem",
    color:  theme.palette.primary.main, 
    border: `2px solid ${theme.palette.primary.main}`,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color:  'white'
    }
  },
  service_container: {
    width: '100%',
    padding: '6rem 0'
  },


  send_message_container: {
    height: '70vh',
    flexDirection: 'column',
    boxSizing: 'border-box',
    display: 'flex',
    placeContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: '30vh'
  },
  
}))
    