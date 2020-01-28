import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core/";
import { useStyles } from "components/HomeUpperContainer/styles";
import { Container, FullScreenContainer, ScrollContainer } from "components";
import { upperContainertexts } from "constants/data";
import homeDesktopImg from "../../images/first_main_desktop.svg";

export default ({ highZindex = false }) => {
  const classes = useStyles();
  const [text, setText] = useState(null);

  useEffect(() => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve(upperContainertexts);
      }, 300);
    }).then(({ home }) => {
      setText(home);
    });
  }, []);

  return (
    <FullScreenContainer highZindex={highZindex} smallDevice={false}>
      <Container>
        <div className={classes.main}>
          {!!text && !!text.text && (
            <div className={classes.text}> {text.text}</div>
          )}

          {!!text && !!text.image && (
            <div
              className={classes.image}
              style={{ background: `url(${homeDesktopImg}) center no-repeat` }}
            />
          )}

          {!!text && !!text.button && (
            <Button className={classes.button} size="large" variant="outlined">
              {text.button}
            </Button>
          )}
        </div>

        <ScrollContainer />
      </Container>
    </FullScreenContainer>
  );
};
