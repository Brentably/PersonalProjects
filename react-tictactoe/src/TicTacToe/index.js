import React, { useState } from 'react';
import './style.css'


const TicTacToe = () => {
    const [xGoes, setXGoes] = useState(true)
    const [matrix, setMatrix] = useState({})
    const switchTurns = () => {setXGoes(prevXGoes => !prevXGoes)}

    const handleClear = () => {
        setMatrix({})
    }

    const Squares = []
    for (let x = 0; x < 9; x++) {
        Squares.push(<Square 
            key={x} 
            number={x} 
            switchTurns={switchTurns} 
            xGoes={xGoes} 
            letter={matrix[`${x}`]}
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
            props.setMatrix(prevMatrix => ({...prevMatrix, [`${props.number}`]: props.xGoes? "X" : "O"}))
            props.switchTurns()
        }
    }
    return (
        <td onClick={handleClick}>{props.letter}</td>
    )

}

export default TicTacToe