import React from "react";
import { Button, Typography } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { useStyles } from "components/SendMessageButton/styles";

export default ({ highZindex = false, smallDevice = false }) => {
  const classes = useStyles();

  return (
    <Link className={classes.link} to="/contacts">
      <Button className={classes.button}>
        <Typography variant="body1"> Send Us Message </Typography>
      </Button>
    </Link>
  );
};
