import React, {
  useState,
  useEffect,
  useCallback,
  useRef
} from "react";
// import { useStyles } from "containers/home/styles";
import {
  HomeLowerContainer,
  HomeMiddleContainer,
  HomeUpperContainer
} from "components";

export default () => {
  // const classes = useStyles();
  const [upperContainerRendered, setUpperContainerRendered] = useState(true);
  let upper = useRef(null);

  const switchZindex = useCallback(() => {
    const halfScreenHeight =
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight) /
      2;
    const currentHeight = document.documentElement.scrollTop;

    if (halfScreenHeight > currentHeight && !upper.current) {
      upper.current = true;
      !upperContainerRendered && setUpperContainerRendered(true);
    }
    if (halfScreenHeight < currentHeight && upper.current) {
      upper.current = false;
      upperContainerRendered && setUpperContainerRendered(false);
    }

  }, [upperContainerRendered]);


  useEffect(() => { 
    switchZindex()
  }, [switchZindex, upperContainerRendered])

  useEffect(() => {
    window.addEventListener("scroll", switchZindex, { passive: true });
    return () => window.removeEventListener("scroll", switchZindex);
  });



  return (
    <div>
      <HomeUpperContainer highZindex={upperContainerRendered} />
      <HomeMiddleContainer />
      <HomeLowerContainer highZindex={!upperContainerRendered} />
    </div>
  );
};
