import React from "react";
import { TextField } from "@material-ui/core";
import { SendMessageButton } from "components";
import { useStyles } from "components/SendMessageContainer/styles";

export default () => {
  const classes = useStyles();
  
  return (
    <form>
      <div className={classes.main}>
        <div className={classes.title}>Got Project in mind?</div>
        <div className={classes.upperWrapper}>
          <TextField
            id="name"
            label="Your Name"
            type="text"
            name="name"
            color="primary"
            className={classes.inputWrapper}
            
          />
          <TextField
            id="email"
            label="Your Email"
            type="text"
            name="email"
            color="primary"
            className={classes.inputWrapper}
            
          />
        </div>
        <div className={classes.lowerWrapper}>
          <TextField
            id="text"
            label="Message or question"
            name="text"
            multiline
            margin="normal"
            rows="6"
          />
        </div>
        <SendMessageButton type="submit" />
      </div>
    </form>
  );
};
