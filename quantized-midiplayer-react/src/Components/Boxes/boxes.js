import React, {useState, useEffect} from "react";
import "./style.css"

function Boxes(props) {
    const num = props.size
    const [snake, setSnake] = useState([15, 15])
    const [direction, setDirection] = useState("down")
    const handleKeyDown = (e) => {
        if (!e.key.startsWith("Arrow")) return
        console.log(e.key)
        debugger;
        switch(e.key) {
            case "ArrowRight":
            setDirection("right");
            break;
            case "ArrowLeft":
            setDirection("left");
            break;
            case "ArrowUp":
            setDirection("up");
            break;
            case "ArrowDown":
            setDirection("down");
            break;
            default:
                console.log("error")
        }
        console.log(direction)
    }
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return clearInterval()
    })
    
    const handleStart = () => {
        setInterval(() => {
            debugger;
        switch(direction) {
            case "right": 
            setSnake(prevSnake => [prevSnake[0] + 1, prevSnake[1]]);
            break;
            case "left": 
            setSnake(prevSnake => [prevSnake[0] - 1, prevSnake[1]]);
            break;
            case "up": 
            setSnake(prevSnake => [prevSnake[0], prevSnake[1] - 1]);
            break;
            case "down": 
            setSnake(prevSnake => [prevSnake[0], prevSnake[1] + 1]);
            break;
            default:
                console.log("error")
        }}, 200)
    }

    const rows = []
    for (let y = 0; y < num; y++) {
        const eachRow = []
        for (let x = 0; x < num; x++) {
            let box;
            if (x === snake[0] & y === snake[1]) {
                box = <td key={x} id={x} className="snake"></td>
            }
            else {
                box = <td key={x} id={x}></td>
            }
            eachRow.push(box)
        }
        rows.push(<tr key={y} id={y}>{eachRow}</tr>)
    }


return (
<div>
  <table>
    <tbody>{rows}</tbody>
  </table>
  <button onClick={handleStart}>Start</button>
</div>
)
}

export default Boxes
