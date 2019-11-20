import React from "react"
import { render } from "react-dom"
import Svg from './Rectangle'

const App = () => {
  return (
    <Svg fill="red" width={400} height={400}/>
  )
}

render(
  <App />,
  document.getElementById("root")
)
