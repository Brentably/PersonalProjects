import React, { useState, useEffect } from 'react';
import './style.css'


const TicTacToe = () => {
    const [xGoes, setXGoes] = useState(true)
    const [matrix, setMatrix] = useState({})
    const switchTurns = () => setXGoes(prevXGoes => !prevXGoes)
    const handleClear = () => setMatrix({})
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ]
    useEffect(() => {
        for (let combo of winningCombos) {
            if (combo.some(x => matrix[x] === undefined)) continue
            if (matrix[combo[0]] === matrix[combo[1]] && matrix[combo[0]] === matrix[combo[2]]) alert("You've won!")
        }
        console.log(matrix)
    })

    const Squares = []
    for (let x = 0; x < 9; x++) {
        Squares.push(<Square 
            key={x} 
            number={x} 
            switchTurns={switchTurns} 
            xGoes={xGoes} 
            letter={matrix[x]}
            setMatrix={setMatrix}/>)
    }
    return (
    <div>
        <table>
        <tbody>
        <tr>
            {Squares[0]}
            {Squares[1]}
            {Squares[2]}
        </tr>
        <tr>
            {Squares[3]}
            {Squares[4]}
            {Squares[5]}
        </tr>
        <tr>
            {Squares[6]}
            {Squares[7]}
            {Squares[8]}
        </tr>
        </tbody>
        </table>
        <button onClick={handleClear}>Clear</button>
    </div>
)


}
const Square = (props) => {
    const handleClick = () => {
        if (!props.letter) {
            props.setMatrix(prevMatrix => ({...prevMatrix, [props.number]: props.xGoes? "X" : "O"}))
            props.switchTurns()
        }
    }
    return (
        <td onClick={handleClick}>{props.letter}</td>
    )

}

export default TicTacToe