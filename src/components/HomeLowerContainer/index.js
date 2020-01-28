import React from "react";
import { Footer, ProjectKickoff, SendMessageButton } from "components";
import { useStyles } from "components/HomeLowerContainer/styles";

export default ({ highZindex = false, smallDevice = false }) => {
  const classes = useStyles();

  return (
    <div
      className={`
      ${classes.main}
      ${highZindex ? classes.main_highZindex : ""}
      ${smallDevice ? classes.main_smallDevice : ""}
    `}
    >
      <div
        className={`${
          smallDevice ? classes.container_smallDevice : classes.upper
        }`}
      >
        <ProjectKickoff />
        <SendMessageButton />
      </div>
      <div
        className={`${
          smallDevice ? classes.container_smallDevice : classes.lower
        }`}
      >
        <Footer />
      </div>
    </div>
  );
};
