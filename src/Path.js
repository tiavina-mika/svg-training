import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  path: {
    fill: 'lavenderblush',
    stroke: 'darkviolet',
    strokeWidth: 2,
  },
  strokedPath: {
    stroke:'darkviolet',
    strokeWidth:18,
    strokeLinejoin:'round',
    fill:'none',
  }
}))

const Line = props => {
  const classes = useStyles();
  return (
      <Box>
        <svg width="800px" height="800px">
            <path
              d="M 120,200 L 140,120 L 180,280 L 220,120 L 260,280 L 300,120"
              className={classes.path}
            />
            {/* unclosed path */}
            <path d="M 40,40 L 150,100 L 100,280" className={classes.path} transform="translate(0, 300)"/>

             {/* closed path */}
            <path d="M 240,40 L 350,100 L 300,280 Z" className={classes.path} transform="translate(2, 300)"/>
            
            {/* manually close */}
            <path d="M 180,150 L 20,20 L 20,280 L 180,150" className={classes.strokedPath} transform="translate(300, 300)"/>

            {/* closed */}
            <path d="M 380,150 L 220,20 L 220,280 Z" className={classes.strokedPath}/>
          </svg>
      </Box>
  );
};

export default Line;
