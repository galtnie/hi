import React from "react";
import { Container } from "@material-ui/core/";
import { useStyles } from "components/Container/styles";

export default ({ children, className = '' }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={`${classes.main} ${className}`}>
      {children}
    </Container>
  );
};
