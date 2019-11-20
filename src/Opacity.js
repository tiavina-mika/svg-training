import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  circle1: {
    fill: 'magenta',
    stroke: 'black',
    strokeWidth: 1,
    strokeOpacity: 0.3,
    fillOpacity: 0.6,
  },
  circle2: {
    fill: 'cyan',
    stroke: 'black',
    strokeWidth: 1,
    fillOpacity: 0.5,
  },
  circle3: {
    fill: 'yellow',
    stroke: 'black',
    strokeWidth: 1,
    fillOpacity: 0.3,
  },
  
}))

const Opacity = props => {
  const { width, height } = props;
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <svg width={width || "400px"} height={height || "400px"}>
            <circle cx="200" cy="100" r="90" className={classes.circle1}/>
            <circle cx="140" cy="200" r="90" className={classes.circle2}/>
            <circle cx="260" cy="200" r="90" className={classes.circle3}/>
          </svg>
      </Box>
    </Box>
  );
};

export default Opacity;
