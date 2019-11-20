import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    eye: {
      fill: 'lavenderblush'
    },  
    main: {
      fill:'lavenderblush',
      stroke:'black'   
    },
    use1: {
      fillOpacity: '0.1',
      strokeOpacity: '0.6',
    }
}))

const GroupHead = props => {
  const { width, height } = props;
  const classes = useStyles();
  return (
    <Box>
      <svg width="400" height="300">
        <defs>
            <g id="head">
                <circle className={classes.main}  cx="0" cy="0" r="30"/>
                <ellipse className={classes.main}cx="0" cy="14" rx="15" ry="8"/>
                <circle className={clsx(classes.eye, classes.main)} cx="-10" cy="-14" r="1"/>
                <circle className={clsx(classes.eye, classes.main)} cx="10" cy="-14" r="1"/>
                <circle className={classes.main} cx="0" cy="0" r="3"/>
            </g>         
        </defs>

        <use xlinkHref="#head" transform="translate(100,100) rotate(90)"/>
        <use xlinkHref="#head" transform="translate(200,100)" className={classes.use1}/>
      </svg>
    </Box>
  );
};

export default GroupHead;
