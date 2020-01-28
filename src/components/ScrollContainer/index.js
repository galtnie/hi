import React from "react";
import { Scroll, ScrollArrow } from "components";
import { useStyles } from "components/ScrollContainer/styles";

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <ScrollArrow />
      <Scroll />
    </div>
  );
};
