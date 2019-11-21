import React from "react";
import { render } from "react-dom";
import Svg from "./Demo";

const App = () => {
  return <Svg width="100%" height={400} />;
};

render(<App />, document.getElementById("root"));
