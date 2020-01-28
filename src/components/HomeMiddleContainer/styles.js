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

  innerWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  container_center: {
    paddingTop: '12rem'
  },

  main: {
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


  subContainerWrapper_center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer_center_title: {
    padding: '0 15%',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  subContainer_center_text: {
    width: '100%',
    padding: '0 18%',
    color: theme.palette.grey.dark,
    textAlign: 'center'
  },

  container: {
    width: '100%',
    padding: '6rem 0'
  },

  container_project: {
    width: '100%',
    padding: '8rem 0'
  },


  subContainerWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  subContainer: {
    width: '42%',
    maxWidth: '42%',
    transform: 'scale(1.05)'
  },
  subContainer_large: {
    width: '50%',
    maxWidth: '50%',
    transform: 'scale(1.15)'
  },


  title: {
    marginBottom: '1.875rem',
    fontSize: '2.25rem',
    fontWeight: 600,
    letterSpacing: '1.5px',
    color: '#000',
    boxSizing: 'border-box',
  },
  text: {
    fontSize: '1.125rem',
    marginBottom: '2.5rem',
    fontWeight: '400',
    lineHeight: '1.5rem',
  }, 
  button: {
    marginTop: '1rem',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    textTransform: 'none',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    borderRadius: "0.5rem",
  },
}));
