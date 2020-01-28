import React from "react";
import { useStyles } from "components/ScrollArrow/styles";

export default () => {
  const classes = useStyles();

  return (
    <svg height="50" width="60">
      <polyline points="0,0 30,25 60,0" className={classes.polyline} />
    </svg>
  );
};
