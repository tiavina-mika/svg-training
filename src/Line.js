import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  line0: {
    fill: 'none',
    stroke: 'springgreen',
    strokeWidth: 2,
  },
  line1: {
    fill: 'none',
    stroke: 'springgreen',
    strokeWidth: 2,
  },
  line2: {
    fill: 'none',
    stroke: 'palegreen',
    strokeWidth: 4,
  },
  line3: {
    fill: 'none',
    stroke: 'lightgreen',
    strokeWidth: 8,
  },
  line4: {
    fill: 'none',
    stroke: 'mediumseagreen',
    strokeWidth: 32,
    strokeDasharray: '5, 10',
  },
  
}))

const Line = props => {
  const { width, height } = props;
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <svg width={width || "400px"} height={height || "400px"}>
            <line x1="100" x2="20" y1="20" y2="200" className={classes.line0}/>

            <line x1="150" x2="70" y1="40" y2="220" className={classes.line1}/>

            <line x1="200" x2="120" y1="60" y2="240" className={classes.line2}/>

            <line x1="250" x2="170" y1="80" y2="260" className={classes.line3}/>

            <line x1="300" x2="220" y1="100" y2="280" className={classes.line4}/>
          </svg>
      </Box>
    </Box>
  );
};

export default Line;
