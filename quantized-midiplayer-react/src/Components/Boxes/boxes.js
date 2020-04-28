import React from "react"
import "./style.css"

function renderBoxes(num) {
  const boxes = []
  for (let x = 0; x < num * num; x++) {
    boxes.push(<div key={x} id={x} className="box"></div>)
  }
  const container = document.querySelector(".container")
  console.dir(container)
//   container.style.setProperty("grid-template-columns", num)
//   container.style.setProperty("grid-template-rows", num)
  return boxes
}

export default renderBoxes
