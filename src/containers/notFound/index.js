import React from "react";
import { Typography } from "@material-ui/core/";
import { useStyles } from "containers/notFound/styles";

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.notFound_container}>
      <span>
        <Typography>
          The page is not found. Navigate to an existing one by clicking on any
          option at the upper bar.
        </Typography>
      </span>
    </div>
  );
};
