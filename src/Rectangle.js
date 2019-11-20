import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

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
  rect5: {
    fill: 'floralwhite',
    stroke: 'hotpink',
    strokeWidth: 7
  },
  
}))

const Rectangle = props => {
  const { width, height } = props;
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <svg width={width || "400px"} height={height || "400px"}>
          <rect x="0" y="0" width="400" height="300" className={classes.rect1} />
          <rect x="50" y="50" width="100" height="40" className={classes.rect2}/>
          <rect x="50" y="160" width="270" height="84"className={classes.rect3}/>
          <rect x="100" y="140" width="40" height="80"className={classes.rect4}/>
        </svg> 
      </Box>
      <Box>
      <svg width={"500px"} height={height || "400px"}>
        <rect x="0" y="0" width="400" height="300" rx="20" ry="20" className={classes.rect1} />
        <rect x="50"  width="200" height="110" rx="70" ry="55" className={classes.rect2}/>
        <rect x="50" y="160" width="270" height="84"className={classes.rect3}/>
        <rect x="130" y="20" width="290" height="120" rx="100" ry="10" className={classes.rect4}/>
      </svg> 
    </Box>
    </Box>
  );
};

export default Rectangle;
