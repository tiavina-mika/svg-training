import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  eyes1: {
    fill: 'none',
    stroke: 'black',
    strokeWidth: 15,
    strokeDasharray: '5, 5',
    // strokeLinecap: 'round'
  },
  eyes2: {
    fill: 'none',
    stroke: 'red',
    strokeWidth: 15,
    // strokeDasharray: '5, 5',
    strokeLinecap: 'round',
    transform: 'translate(200, 150)'
  },
  
}))

const CircularProgress = props => {
  const { width, height } = props;
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <svg width={width || "400px"} height={height || "400px"}>
            {/* <circle cx="100" cy="100" r="60" className={classes.eyes1}/> */}
            <circle cx="100" cy="100" r="60" className={classes.eyes2}/>

          </svg>
      </Box>
    </Box>
  );
};

export default CircularProgress;
