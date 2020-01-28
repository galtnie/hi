import React, { useState, useEffect, useCallback } from "react";
import { Wrapper } from "components/SlideContainer/alterableStyles";

export default ({ children, className = "", delay = 0.3, ...props }) => {
  const [slideIn, setSlideIn] = useState(false);
  const container = React.useRef();

  const slide = useCallback(() => {
    if (container.current) {
      const halfContainer =
        (container.current.getBoundingClientRect().bottom +
          container.current.getBoundingClientRect().top) /
        2;
      
      if (halfContainer < window.innerHeight) {
        setSlideIn(true);
      } else if (halfContainer > window.innerHeight) {
        setSlideIn(false);
      }
    }
  }, [container]);

  useEffect(() => {
    window.addEventListener("scroll", slide);
    return () => window.removeEventListener("scroll", slide);
  }, [container, slide, slideIn]);

  useEffect(() => {
    slide();
  }, [slide]);

  return (
    <div ref={container} className={className}>
      <Wrapper name={Number(slideIn)} delay={delay}>
        {children}
      </Wrapper>
    </div>
  );
};
