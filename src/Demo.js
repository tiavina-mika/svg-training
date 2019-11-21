import React, {Fragment} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  main: {
    fill:'url(#linearBlue)',
    // stroke:'black',
    // strokeWidth:'5px',  
  },
  linear1: {
    stopColor:'#2b98ec',
    // stopOpacity:0.2,
  },
  linear2: {
    stopColor:'#34a1ee',
    stopOpacity:0.9,
  },
  linear3: {
    stopColor:'#3caaef',
    stopOpacity:0.7,
  },
  linear4: {
    stopColor:'#4abaf3',
    stopOpacity:0.5,
  },
  linear5: {
    stopColor:'#50c1f5',
    stopOpacity:0.3,
  },
}))

const Use = ({id, x, y}) => {
  console.log(x && y ? 't': 'f')
  if (x && y) return <use xlinkHref={`#${id}`} transform={`translate(${y},${x})`}/>;
  return <use xlinkHref={`#${id}`}/>;
}

const Defs = ({mainId, id, stops, gId, width, use}) => {
  return (
        <Fragment>
            <defs>
                <linearGradient id={id} x1="0" y1="0" x2="0%" y2="100%">
                  { stops.map(s => (
                    <stop offset={s.offset} stopColor={s.stopColor} stopOpacity={s.stopOpacity || 1} />
                  ))}
                </linearGradient>
            </defs>
            <g id={gId}>
                    <rect
                      x="0"
                      y="0"
                      width={200}
                      height="50"
                      rx="10"
                      ry="10"
                      fill={`url(#${id})`} />
                </g>
            { use.map(u => <Use id={gId} y={u.y} x={u.x}/>)}
            </Fragment>

  )
}

const LinearGradient = props => {
  const { width, height } = props;
  const classes = useStyles();

  const rectBlue = [
    {offset: '0%', stopColor: '#2b98ec'},
    {offset: '25%', stopColor: '#34a1ee', stopOpacity:0.9},
    {offset: '50%', stopColor: '#3caaef', stopOpacity:0.7},
    {offset: '75%', stopColor: '#4abaf3', stopOpacity:0.5},
    {offset: '100%', stopColor: '#50c1f5', stopOpacity:0.9},
  ]
  return (
      <svg width={width || "500px"} height={height || "400px"}>    
          {/* <defs>
              <linearGradient id="linearBlue" x1="0" y1="0" x2="0%" y2="100%">
                <stop offset="0%" className={classes.linear1}/>
                <stop offset="25%" className={classes.linear2}/>
                <stop offset="50%" className={classes.linear3}/>
                <stop offset="75%" className={classes.linear4}/>
                <stop offset="100%" className={classes.linear5}/>
              </linearGradient>
              <g id="blue">
                  <rect x="0" y="0" width="150" height="40" rx="10" ry="10" className={classes.main} />
              </g>
          </defs> */}
          {/* <defs>
            <g id="blueDef"> */}
              <Defs
                id="linearBlue"
                stops={rectBlue}
                gId="blue"
                width={200}
                mainId="blueDef"
                use={[{x: 100, y: 60}, {x: 10, y: 220}]}
              />
            {/* <Use id="blue" y={100} x={0}/>
          <Use id="blue" y={300} x={100}/>
          </g>

          </defs> */}

          {/* <use xlinkHref="#blue" transform="translate(100,0)"/> */}
          {/* <Use id="blueDef" y={100} x={0}/> */}
          <Use id="blueDef" />

      </svg> 
  );
};

export default LinearGradient;
