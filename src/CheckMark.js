import React from "react";

const CheckMark = props => {
  const { width, height, fill, className, style } = props;
  return (
    <svg height="400" width="400">
      <circle cx="60" cy="150" r="50" ry="50" fill="none" stroke="black" />
      <path
        d="M10,50 A 50 20 0 1 1 110,50"
        fill="none"
        stroke="red"
        stroke-width="4"
        stroke-dasharray="5 5"
      />
      <path
        d="M10,50 A 50 20 0 0 0 110,50 "
        fill="none"
        stroke="red"
        stroke-width="4"
        stroke-dasharray="5 5"
      />

      <circle cx="60" cy="150" r="50" fill="none" stroke="black" />
      <path
        d="M10,150 A 50 50 0 1 1 110,150"
        fill="none"
        stroke="red"
        stroke-width="24"
        stroke-dasharray="5 5"
      />
      <path
        d="M10,150 A 50 50 0 0 0 110,150"
        fill="none"
        stroke="red"
        stroke-width="24"
        stroke-dasharray="5 5"
      />

      <ellipse cx="60" cy="300" rx="50" ry="20" fill="none" stroke="black" />
      <path
        d="M 10,300 a 50 20 -45 1 1 100,0"
        fill="none"
        stroke="green"
        stroke-width="4"
      />
      <path
        d="M 10,300 a 50 20 -30 1 1 100,0"
        fill="none"
        stroke="lime"
        stroke-width="4"
      />
      <path
        d="M 10,300 a 50 20 -75 1 1 100,0"
        fill="none"
        stroke="olive"
        stroke-width="4"
      />
      <path
        d="M 10,300 a 50 20 45 0 0 100,0"
        fill="none"
        stroke="orange"
        stroke-width="4"
      />
      <path
        d="M 10,300 a 50 20 30 0 0 100,0"
        fill="none"
        stroke="red"
        stroke-width="4"
      />
      <path
        d="M 10,300 a 50 20 75 0 0 100,0"
        fill="none"
        stroke="pink"
        stroke-width="4"
      />
    </svg>
  );
};

export default CheckMark;
