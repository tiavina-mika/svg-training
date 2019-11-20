import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  eyes1: {
    fill: 'none',
    stroke: 'black',
    strokeWidth: 3
  },
  eyes2: {
    fill: 'powderblue',
    stroke: 'slategray',
    strokeWidth: 1
  },
  eyes3: {
    fill: 'black',
  },
  bouche: {
    fill: 'black',
  },
  
}))

const Visage = props => {
  const { width, height } = props;
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <svg width={width || "400px"} height={height || "400px"}>
            {/* left eye */}
            <circle cx="100" cy="100" r="50" className={classes.eyes1}/>

            <circle cx="120" cy="110" r="23"className={classes.eyes2}/>

            <circle cx="120" cy="120" r="3" className={classes.eyes3}/>

            {/* right eye */}

            <circle cx="300" cy="100" r="50" className={classes.eyes1}/>

            <circle cx="290" cy="110" r="23"className={classes.eyes2}/>

            <circle cx="285" cy="120" r="3" className={classes.eyes3}/>

            {/* mouth */}
            <circle cx="200" cy="240" r="30" className={classes.bouche}/>
          </svg>
      </Box>
    </Box>
  );
};

export default Visage;
