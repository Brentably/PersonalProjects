import React, {useState} from "react"
import "./style.css"

function Boxes(props) {
    // const [snake, setSnake] = useState([15, 15])
    const [clas] = useState("snake")
    const num = props.size
    const rows = []
    for (let x = 0; x < num; x++) {
        const eachRow = []
        for (let y = 0; y < num; y++) {
            let box;
            if (x === 15 & y === 15) {
                box = <td key={y} id={y} className={clas}></td>
            }
            else {
                box = <td key={y} id={y} className="box"></td>
            }
            eachRow.push(box)

        }
        rows.push(<tr key={x} id={x}>{eachRow}</tr>)
    }
return (
<div>
  <table onKeyDown={handleKeys}>
    <tbody>{rows}</tbody>
  </table>
  <button>Start</button>
</div>
)
}

export default Boxes
