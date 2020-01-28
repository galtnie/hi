import React from "react";
// import { useStyles } from "components/HomeUpperContainer/styles";
import { Container, FullScreenContainer } from "components";


export default ({ children, highZindex = false }) => {
  // const classes = useStyles();

  return (
    <FullScreenContainer highZindex={highZindex} smallDevice={false}>
      <Container>
        {children}
      </Container>
    </FullScreenContainer>
  );
};
