import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  upperContainer_main: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    position: "relative"
  },
  upperContainer_text: {
    width: "40%",
    fontWeight: 700,
    fontSize: "2.25rem",
    lineHeight: "3.125rem",
    textTransform: "initial",
    textAlign: "left",
    padding: 0,
    marginBottom: "5rem"
  },
  upperContainer_image: {
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
  upperContainer_button: {
    color: theme.palette.secondary.main,
    backgroundColor: "white",
    border: "2px solid white",
    textTransform: "none",
    "&:hover": {
      color: "white",
      backgroundColor: theme.palette.secondary.main
    }
  },


  middleContainer_innerWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  middleContainer_container_center: {
    paddingTop: '12rem'
  },
  middleContainer_main: {
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
  middleContainer_subContainerWrapper_center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middleContainer_subContainer_center_title: {
    padding: '0 15%',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  middleContainer_subContainer_center_text: {
    width: '100%',
    padding: '0 18%',
    color: theme.palette.grey.dark,
    textAlign: 'center'
  },
  middleContainer_container: {
    width: '100%',
    padding: '6rem 0'
  },

  middleContainer_container_project: {
    width: '100%',
    padding: '8rem 0'
  },
  middleContainer_subContainerWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  middleContainer_subContainer: {
    width: '42%',
    maxWidth: '42%',
    transform: 'scale(1.05)'
  },
  middleContainer_subContainer_large: {
    width: '50%',
    maxWidth: '50%',
    transform: 'scale(1.15)'
  },
  middleContainer_title: {
    marginBottom: '1.875rem',
    fontSize: '2.25rem',
    fontWeight: 600,
    letterSpacing: '1.5px',
    color: '#000',
    boxSizing: 'border-box',
  },
  middleContainer_text: {
    fontSize: '1.125rem',
    marginBottom: '2.5rem',
    fontWeight: '400',
    lineHeight: '1.5rem',
  }, 
  middleContainer_button: {
    marginTop: '1rem',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    textTransform: 'none',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    borderRadius: "0.5rem",
  },


  lowerContainer_upperPart: {
    height: '70vh',
    flexDirection: 'column',
    boxSizing: 'border-box',
    display: 'flex',
    placeContent: 'center',
    alignItems: 'center',
  },
  lowerContainer_lowerPart: {
    height: '30vh'
  },
}))