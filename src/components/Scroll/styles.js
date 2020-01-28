import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  "@keyframes appearScroll": {
    "0%": { opacity: 0 },
    "40%": { opacity: 0 },
    "80%": { opacity: 1 },
    "100%": { opacity: 0 }
  },
  main: {
    animationName: "$appearScroll",
    animationDuration: "3s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    animationFillMode: "backwards"
  }
}));
