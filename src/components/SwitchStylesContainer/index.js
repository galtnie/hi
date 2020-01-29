import React, { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SWITCH_STYLES, SWITCH_NAVBAR_STYLES } from "../../constants";
import { isEqual } from "lodash";

export default ({
  children,
  className,
  scrollEffect = { on: null, off: null },
  when = "half_viewed", // or 'reaches_top' or 'window_top'
  navbarOnly = false,
  bottom = false
}) => {
  const dispatch = useDispatch();
  const alterableStyles = useSelector(state => state.alterableStyles);

  // let switcher = useRef(null);
  let scrollRef = useRef(null);
  let container = useRef(null);
  let switcher = useRef(null);

  const compareStyles = (current = {}, next = {}, navbarOnly = false) => {
    if (!next) {
      return false;
    }
    if (navbarOnly) {
      return current.navbarBackgroundColor.to !== next.navbarBackgroundColor.to;
    }
    return (
      current.navbarBackgroundColor.to !== next.navbarBackgroundColor.to ||
      current.backgroundColor.to === next.navbarBackgroundColor.to ||
      current.color.to === next.color.to
    );
  };

  const onScroll = useCallback(() => {
    if (container.current) {
      if (when === "window_top") {
        const effectLimitor = window.innerHeight > window.scrollY;
        if (effectLimitor) {
          scrollRef.current > window.scrollY &&
            !window.scrollY &&
            compareStyles(alterableStyles, scrollEffect.off, navbarOnly) &&
            dispatch({
              type: SWITCH_STYLES,
              payload: scrollEffect.off
            });

          scrollRef.current < window.scrollY &&
            window.scrollY &&
            compareStyles(alterableStyles, scrollEffect.on, navbarOnly) &&
            dispatch({
              type: navbarOnly ? SWITCH_NAVBAR_STYLES : SWITCH_STYLES,
              payload: scrollEffect.on
            });
        }
      }

      if (when === "half_viewed") {
        const position = container.current.getBoundingClientRect();
        const halfContainer = (position.bottom + position.top) / 2;

        if (scrollRef.current > window.scrollY) {
          const effectLimitor = position.top < window.innerHeight;
          if (effectLimitor) {
            if (
              halfContainer > window.innerHeight &&
              scrollEffect.off &&
              compareStyles(alterableStyles, scrollEffect.off, navbarOnly)
            ) {
              if (!isEqual(scrollEffect.off, switcher.current)) {
                dispatch({
                  type: navbarOnly ? SWITCH_NAVBAR_STYLES : SWITCH_STYLES,
                  payload: scrollEffect.off
                });
                switcher.current = scrollEffect.off;
              }
            }
          }
        }
        if (scrollRef.current < window.scrollY) {
          const effectLimitor = position.bottom > 0;
          if (effectLimitor) {
            if (
              halfContainer < window.innerHeight &&
              scrollEffect.on &&
              compareStyles(alterableStyles, scrollEffect.on, navbarOnly)
            ) {
              if (!isEqual(scrollEffect.on, switcher.current)) {
                dispatch({
                  type: navbarOnly ? SWITCH_NAVBAR_STYLES : SWITCH_STYLES,
                  payload: scrollEffect.on
                });
                switcher.current = scrollEffect.on;
              }
            }
          }
        }
      }

      if (when === "reaches_top") {
        const position = container.current.getBoundingClientRect();
        const effectLimitor = bottom
          ? position.top < 100
          : position.top < 100 && position.bottom > window.innerHeight;

        if (effectLimitor) {
          if (scrollRef.current > window.scrollY) {
            if (
              position.top > 0 &&
              scrollEffect.off &&
              compareStyles(alterableStyles, scrollEffect.off, navbarOnly)
            ) {
              if (!isEqual(scrollEffect.off, switcher.current)) {
                dispatch({
                  type: navbarOnly ? SWITCH_NAVBAR_STYLES : SWITCH_STYLES,
                  payload: scrollEffect.off
                });
                switcher.current = scrollEffect.off;
              }
            }
          }

          if (scrollRef.current < window.scrollY) {
            if (
              position.top <= 0 &&
              scrollEffect.on &&
              compareStyles(alterableStyles, scrollEffect.on, navbarOnly)
            ) {
              if (!isEqual(scrollEffect.on, switcher.current)) {
                dispatch({
                  type: navbarOnly ? SWITCH_NAVBAR_STYLES : SWITCH_STYLES,
                  payload: scrollEffect.on
                });
                switcher.current = scrollEffect.on;
              }
            }
          }
        }
      }

      scrollRef.current = window.scrollY;
    }
  }, [
    alterableStyles,
    bottom,
    dispatch,
    navbarOnly,
    scrollEffect.off,
    scrollEffect.on,
    when
  ]);

  useEffect(() => {
    onScroll();
  }, [onScroll]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [
    dispatch,
    scrollEffect,
    scrollEffect.on,
    scrollEffect.off,
    switcher,
    when,
    navbarOnly,
    onScroll
  ]);

  return (
    <div className={className} ref={container}>
      {children}
    </div>
  );
};

// useEffect(() => {
//   if (container.current) {
//     const position = container.current.getBoundingClientRect();
//     const halfContainer = (position.bottom + position.top) / 2;

//     if (halfContainer < window.innerHeight && position.bottom > 0) {
//       if (switcher.current !== "on") {
//         switcher.current = "on";
//         //SWITCH STYLES HERE IF THE COMPONENT'S CENTRE IS WITHIN THE SCREEN FRAMES:
//         scrollEffect.on &&
//           dispatch({
//             type: navbarOnly ? SWITCH_NAVBAR_STYLES : SWITCH_STYLES,
//             payload: scrollEffect.on
//           });
//       }
//     }
//   }
// }, [dispatch, navbarOnly, scrollEffect.on, switcher]);

// useEffect(() => {
//   onScroll()
// }, [onScroll])
