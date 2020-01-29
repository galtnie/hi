import React from "react";
import { useStyles } from "components/MiddleContainer/styles";
import { Wrapper } from "components/MiddleContainer/styledComponents";

export default ({ children, last = false }) => {
  const classes = useStyles();
  return (
    <Wrapper className={classes.wrapper} last>
      {children}
    </Wrapper>
  );
};
