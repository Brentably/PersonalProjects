import React from "react"
import "./style.css"

function Boxes(props) {
    const num = props.rows
    const boxes = []
    for (let x = 0; x < num * num; x++) {
    boxes.push(<div key={x} id={x} className="box"></div>)
    }
    // const container = document.querySelector(".container")
    // i have no idea why this doesn't work ^ and why "this" is undefined when I console log it
    // console.log(this)
//could do useEffect to access the parent container once it mounts? maybe... I feel like that is not how it's supposed to be done though
    //   container.style.setProperty("grid-template-columns", num)
    //   container.style.setProperty("grid-template-rows", num)
return boxes
}

export default Boxes
