import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    rect: {
      fill: 'red'
    },
    polygon: {
      fill: 'forestgreen'
    },
  
}))

const Group = props => {
  const { width, height } = props;
  const classes = useStyles();
  return (
    <Box>
      <svg width="400" height="300">
          <g id="monsapin">
            <rect x="45" y="70" className={classes.rect} width="10" height="20"/>
            <polygon className={classes.polygon} points="20,70 80,70 60,55 70,55 55,40 65,40 50,20 35,40 45,40 30,55 40,55"/>
          </g>

          <use xlinkHref="#monsapin" transform="translate(100,100)"/>
          <use xlinkHref="#monsapin" transform="translate(10,190)"/>
          <use xlinkHref="#monsapin" transform="translate(300,-20)"/>
          <use xlinkHref="#monsapin" transform="translate(320,200)"/>
          <use xlinkHref="#monsapin" transform="translate(200,160)"/>
          <use xlinkHref="#monsapin" transform="translate(170,30)"/>
      </svg>
    </Box>
  );
};

export default Group;
