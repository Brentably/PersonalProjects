import React from 'react';
import './style.css'

const Grid = (props) => {
    const { size, snake } = props
    const rows = []
    for (let y = 0; y < size; y++) {
    const eachRow = []
    for (let x = 0; x < size; x++) {
    let box
    // if (x === snake[0] && y === snake[1]) {
    // box = <td key={x} id={x} className="snake"></td>
    // } else {
    // box = <td key={x} id={x}></td>
    // }
    if (snake.some(block => block[0] === x && block[1] === y)) {
    box = <td key={x} id={x} className="snake"></td>
    } else {
    box = <td key={x} id={x}></td>
    }
    eachRow.push(box)
    }
    rows.push(
    <tr key={y} id={y}>
    {eachRow}
    </tr>
    )
    }
    return (
        <table>
            <tbody>{rows}</tbody>
        </table>
    )
}


export default Grid