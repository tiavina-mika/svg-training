import React from "react"
import { render } from "react-dom"
import Svg from './Path'

const App = () => {
  return (
    <Svg width={400} height={400}/>
  )
}

render(
  <App />,
  document.getElementById("root")
)
