import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  upperLine: {
    marginTop: "2rem",
    marginBottom: "2rem",
    borderTop: "1px solid #b8b8b8",
    width: "100%"
  },
  main: {
    fontFamily: "Montserrat",
    color: theme.palette.grey.main,
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start"
  },
  logoContainer: {
    width: "16rem",
    maxWidth: "16rem",
    "&>span": {
      fontSize: ".6875rem",
      fontWeight: 400,
      width: 200,
      alignSelf: "flex-end"
    }
  },
  internalLinksCotainer: {
    width: "35rem",
    maxWidth: "35rem",
    display: "flex",
    justifyContent: "space-around",
    "&>div": {
      display: "flex",
      flexDirection: "column"
    }
  },
  externalLinksCotainer: {
    width: "16rem",
    maxWidth: "16rem",
    display: "flex",
    justifyContent: "space-around"
  },
  columnLink: {
    color: theme.palette.grey.main,
    textDecoration: "none",
    "&:visited": {
      textDecoration: "none"
    },
    "&:hover": {
      textDecoration: "none"
    }
  },
  columnFirstItem: {
    color: theme.palette.grey.bold,
    fontSize: ".8125rem",
    fontWeight: 600,
    marginTop: "0.7rem",
    marginBottom: "0.5rem"
  },
  columnItem: {
    fontSize: ".6875rem",
    color: theme.palette.grey.main
  },
  companyInfo: {
    marginTop: "1rem",
    cursor: "default",
    color: theme.palette.grey.main
  },
  linkWrapper: {
    cursor: "pointer",
    padding: "3% 0 0 0",
    transition: "padding 0.3s ease 0.2s",
    "&:hover": {
      padding: "0 0 3% 0"
    }
  },
  externalLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "1.8rem",
    height: "1.8rem"
  },
  externalLinkImage: {
    backgroundColor: "white",
    color: theme.palette.grey.main,
    borderRadius: "50%"
  },
  imageWrapper: {
    width: "1.5rem",
    height: "1.5rem",
    display: "flex",
    backgroundColor: "white",
    border: `1px solid ${theme.palette.grey.main}`,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center"
  }
}));
