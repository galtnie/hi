import React, { useState, useEffect } from "react";
import { Container, MiddleText } from "components";
import { useStyles } from "components/ProjectKickoff/styles";
import { projectKickoff } from "constants/data";

export default ({ className }) => {
  const classes = useStyles();
  const [projectStart, setProjectStart] = useState(null);

  useEffect(() => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve(projectKickoff);
      }, 300);
    }).then(value => {
      setProjectStart(value);
    });
  }, [projectStart]);

  return (
    <Container className={className ? className : ""}>
      <MiddleText title className={classes.title}>
        {!!projectStart && !!projectStart.title && projectStart.title.toUpperCase()}
      </MiddleText>
      <MiddleText className={classes.text}>
        <span>
          {!!projectStart && !!projectStart.text && projectStart.text}
        </span>
      </MiddleText>
    </Container>
  );
};
