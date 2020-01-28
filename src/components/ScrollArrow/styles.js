import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  "@keyframes animateArrow": {
    "0%": {
      strokeDashoffset: 100,
      transform: "translate(0, 0)",
      opacity: 1
    },
    "20%": {
      strokeDashoffset: 0
    },
    "40%": {
      strokeDashoffset: 0,
      transform: "translate(0, 15%)",
      opacity: 1
    },
    "80%": {
      strokeDashoffset: 0,
      transform: "translate(0, 30%)",
      opacity: 1
    },
    "100%": {
      strokeDashoffset: 0,
      transform: "translate(0, 30%)",
      opacity: 0
    }
  },
  polyline: {
    strokeDasharray: 100,
    strokeDashoffset: 100,
    fill: "none",
    stroke: "rgba(255, 255, 255, 0.5)",
    strokeWidth: 2,
    animationName: "$animateArrow",
    animationDuration: "3s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    marginTop: "2rem"
  }
}));
