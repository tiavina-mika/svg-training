import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  rect1: {
    fill: 'none',
    stroke: 'slategray',
    strokeWidth: 1
  },
  rect2: {
    fill: 'cornsilk',
    stroke: 'cornflowerblue',
    strokeWidth: 1
  },
  rect3: {
    fill: 'lavender',
    stroke: 'none',
    strokeWidth: 1
  },
  rect4: {
    fill: 'none',
    stroke: 'yellowgreen',
    strokeWidth: 3
  },
}))

const Rectangle = props => {
  const { width, height } = props;
  const classes = useStyles();
  return (
    <svg width={width || "400px"} height={height || "400px"}>
      <rect x="0" y="0" width="400" height="300" className={classes.rect1} />
      <rect x="50" y="50" width="100" height="40" className={classes.rect2}/>
      <rect x="50" y="160" width="270" height="84"className={classes.rect3}/>
      <rect x="100" y="140" width="40" height="80"className={classes.rect4}/>
    </svg>
  );
};

export default Rectangle;
