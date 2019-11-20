import React from "react"
import { render } from "react-dom"
import CheckMark from './CheckMark'

render(
  <CheckMark fill="red" width={300} height={300}/>,
  document.getElementById("root")
)
