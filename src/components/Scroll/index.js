import React from "react";
import { Typography } from "@material-ui/core/";
import { useStyles } from "components/Scroll/styles";

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Typography
        variant="body2"
        paragraph={true}
        gutterBottom={true}
        style={{ color: "rgba(255, 255, 255, 0.8)" }}
      >
        SCROLL
      </Typography>
    </div>
  );
};
