import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  main: {
    fill: "url(#degrade)",
    stroke: "black",
    strokeWidth: "5px"
  },
  linear1: {
    stopColor: "chartreuse",
    stopOpacity: 0.2
  },
  linear2: {
    stopColor: "cornflowerblue",
    stopOpacity: 1
  },
  linear3: {
    stopColor: "chartreuse",
    stopOpacity: 0.7
  },
  linear4: {
    stopColor: "red",
    stopOpacity: 1
  }
}));

const LinearGradient = props => {
  const { width, height } = props;
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <svg width={width || "400px"} height={height || "400px"}>
          <defs>
            <linearGradient id="degrade" x1="0" y1="0" x2="0%" y2="100%">
              <stop offset="0%" className={classes.linear1} />
              <stop offset="40%" className={classes.linear2} />
              <stop offset="60%" className={classes.linear3} />
              <stop offset="100%" className={classes.linear4} />
            </linearGradient>
          </defs>

          <rect
            x="50"
            y="50"
            width="200"
            height="120"
            className={classes.main}
          />

          <ellipse
            cx="200"
            cy="220"
            rx="120"
            ry="70"
            className={classes.main}
          />
        </svg>
      </Box>
    </Box>
  );
};

export default LinearGradient;
