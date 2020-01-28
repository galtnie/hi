import React, { useState, useEffect, useCallback, useRef } from "react";
import { useStyles } from "containers/home/styles";
import {
  Footer,
  HomeMiddleContainer,
  LowerContainer,
  ProjectKickoff,
  ScrollContainer,
  SendMessageButton,
  UpperContainer
} from "components";
import { Button } from "@material-ui/core/";
import { upperContainertexts } from "constants/data";


export default () => {
  const classes = useStyles();
  const [upperContainerRendered, setUpperContainerRendered] = useState(true);
  let upper = useRef(null);

  const switchZindex = useCallback(() => {
    const halfScreenHeight =
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight) /
      2;
    const currentHeight = document.documentElement.scrollTop;

    if (halfScreenHeight > currentHeight && !upper.current) {
      upper.current = true;
      !upperContainerRendered && setUpperContainerRendered(true);
    }
    if (halfScreenHeight < currentHeight && upper.current) {
      upper.current = false;
      upperContainerRendered && setUpperContainerRendered(false);
    }
  }, [upperContainerRendered]);

  useEffect(() => {
    switchZindex();
  }, [switchZindex, upperContainerRendered]);

  useEffect(() => {
    window.addEventListener("scroll", switchZindex, { passive: true });
    return () => window.removeEventListener("scroll", switchZindex);
  });

  const [upperContainer_text, setUpperContainer_Text] = useState({
    title: "",
    text: "",
    button: "",
    image: null
  });

  useEffect(() => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve(upperContainertexts);
      }, 300);
    }).then(({ home }) => {
      setUpperContainer_Text(home);
    });
  }, []);

  return (
    <div>
      <UpperContainer highZindex={upperContainerRendered}>
        <div className={classes.upperContainer_main}>
          <div className={classes.upperContainer_text}>
            {upperContainer_text.text}
          </div>

          <div
            className={classes.upperContainer_image}
            style={{
              background: `url(${upperContainer_text.image}) center no-repeat`
            }}
          />

          {upperContainer_text.button &&
            <Button
            className={classes.upperContainer_button}
            size="large"
            variant="outlined"
          >
            {upperContainer_text.button}
            </Button>
          }
          
        </div>
        <ScrollContainer />
      </UpperContainer>

      <HomeMiddleContainer />

      <LowerContainer highZindex={!upperContainerRendered}>
        <div className={classes.lowerContainer_upperPart}>
          <ProjectKickoff />
          <SendMessageButton />
        </div>
        <div className={classes.lowerContainer_lowerPart}>
          <Footer />
        </div>
      </LowerContainer>
    </div>
  );
};
