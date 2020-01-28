import React from "react";
import { useStyles } from "components/MiddleText/styles";

export default ({ children, title = false, className = false }) => {
  const classes = useStyles();

  return (
    <div
      className={`
        ${classes.text} 
        ${title ? classes.title : ""}
        ${className ? className : ""}
      `}
      >
        {children}
    </div>
  );
};
