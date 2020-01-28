import React, { useState, useEffect } from "react";
import { ScrollContainer, UpperContainer } from "components";
import { upperContainertexts } from "constants/data";
import { useStyles } from "./styles";

export default () => {
  const classes = useStyles();

  const [upperContainer_text, setUpperContainer_Text] = useState({
    title: "",
    text: ""
  });

  useEffect(() => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve(upperContainertexts);
      }, 300);
    }).then(({ portfolio }) => {
      setUpperContainer_Text(portfolio);
    });
  }, []);

  return (
    <UpperContainer>
      <div className={classes.upperContainer_wrapper}>
        <div className={classes.upperContainer_title}>
          {upperContainer_text.title.toUpperCase()}
        </div>
        <div className={classes.upperContainer_text}>
          {upperContainer_text.text}
        </div>
      </div>
      <ScrollContainer />
    </UpperContainer>
  );
};
