import React from "react";
import { useStyles } from "components/FullScreenContainer/styles";

export default ({
  children = null,
  smallDevice = false,
  highZindex = false
}) => {
  const classes = useStyles();

  return (
    <div
      className={`
        ${classes.main} 
        ${highZindex ? classes.main_highZindex : ""} 
        ${smallDevice ? classes.main_smallDevice : ""}
      `}
    >
      {children}
    </div>
  );
};
