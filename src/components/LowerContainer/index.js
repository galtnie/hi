import React from "react";
import { useStyles } from "components/LowerContainer/styles";

export default ({ children, highZindex = false, smallDevice = false }) => {
  const classes = useStyles();

  return (
    <div
      className={`
      ${classes.main}
      ${highZindex ? classes.highZindex : ""}
    `}
    >
      {children}
    </div>
  );
};
