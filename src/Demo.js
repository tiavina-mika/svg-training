import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  main: {
    fill: "url(#linearBlue)"
    // stroke:'black',
    // strokeWidth:'5px',
  },
  linear1: {
    stopColor: "#2b98ec"
    // stopOpacity:0.2,
  },
  linear2: {
    stopColor: "#34a1ee",
    stopOpacity: 0.9
  },
  linear3: {
    stopColor: "#3caaef",
    stopOpacity: 0.7
  },
  linear4: {
    stopColor: "#4abaf3",
    stopOpacity: 0.5
  },
  linear5: {
    stopColor: "#50c1f5",
    stopOpacity: 0.3
  }
}));

const Use = ({ id, x, y }) => (
  <use xlinkHref={`#${id}`} transform={`translate(${y},${x})`} />
);

const Rectangle = ({ id, stops, gId, width, x, y }) => {
  if (typeof stops === "string") {
    return (
      <rect
        // x="0"
        // y="0"
        width={width}
        height="50"
        rx="10"
        ry="10"
        fill={stops}
      />
    );
  }
  return (
    <svg>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0%" y2="100%">
          {stops.map(s => (
            <stop
              offset={s.offset}
              stopColor={s.stopColor}
              stopOpacity={s.stopOpacity || 1}
            />
          ))}
        </linearGradient>
      </defs>
      <defs>
        <g id={gId}>
          <rect
            // x="0"
            // y="0"
            width={width}
            height="50"
            rx="10"
            ry="10"
            fill={`url(#${id})`}
          />
        </g>
      </defs>
      <Use id={gId} y={y} x={x} />
    </svg>
  );
};

const rectBlue = [
  { offset: "0%", stopColor: "#2b98ec" },
  { offset: "25%", stopColor: "#34a1ee", stopOpacity: 0.9 },
  { offset: "50%", stopColor: "#3caaef", stopOpacity: 0.7 },
  { offset: "75%", stopColor: "#4abaf3", stopOpacity: 0.5 },
  { offset: "100%", stopColor: "#50c1f5", stopOpacity: 0.9 }
];
const rectViolet = [
  { offset: "0%", stopColor: "#9264cd" },
  { offset: "25%", stopColor: "#8c60c4", stopOpacity: 0.9 },
  { offset: "50%", stopColor: "#865bbc", stopOpacity: 0.7 },
  { offset: "75%", stopColor: "#8157b6", stopOpacity: 0.5 },
  { offset: "100%", stopColor: "#9264cc", stopOpacity: 0.9 }
];

const LinearGradient = props => {
  const { width, height } = props;
  const classes = useStyles();

  return (
    <svg width={width || "500px"} height={height || "400px"}>
      <Rectangle
        stops={rectBlue}
        gId="blue"
        id="blueId"
        width={200}
        x={250}
        y={150}
      />
      <Rectangle
        stops={rectViolet}
        gId="violet"
        id="violetId"
        width={200}
        x={150}
        y={50}
      />
      <Rectangle
        stops="black"
        gId="white"
        id="whiteId"
        width={120}
        x={50}
        y={50}
      />
    </svg>
  );
};

export default LinearGradient;
