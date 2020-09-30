import React from 'react';
import './grid.css'

const Grid = (props) => {
    //xSize and ySize should be whole numbers and special is an array of coordinate arrays that you can add a class to (for example to highlight a snake on the board)
    //I've also added player location for this specific use case because I want a player at just one single coordinate. The code isn't too hard to parse, so it should make sense
    const { xSize, ySize, special, playerLocation } = props
    const rows = []


    for (let y = 0; y < ySize; y++) {
    const eachRow = []
    for (let x = 0; x < xSize; x++) {
    let box
    if (special && special.some(block => block[0] === x && block[1] === y)) {
    box = <td key={x} id={x} className="special"></td>
    } else if (playerLocation && playerLocation[0] === x && playerLocation[1] === y) {
    box = <td key={x} id={x} className="player"></td>
    } else {
    box = <td key={x} id={x}></td>
    }
    eachRow.push(box)
    }
    rows.push(
    <tr key={y} id={y}>
    {eachRow}
    </tr>
    )}

    return (
        <table>
            <tbody>{rows}</tbody>
        </table>
    )
}


export default Grid