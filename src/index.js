import React from "react"
import { render } from "react-dom"
import Circle from './Circle'

const App = () => {
  return (
    <Circle fill="red" width={300} height={300}/>
  )
}

render(
  <App />,
  document.getElementById("root")
)
