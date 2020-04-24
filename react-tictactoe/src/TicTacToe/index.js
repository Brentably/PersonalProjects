import React, { useState } from 'react';
import './style.css'


const TicTacToe = () => {
    const [xGoes, setXGoes] = useState(true)

    const switchTurns = () => {setXGoes(prevXGoes => !prevXGoes)}

    const handleClear = () => {
        console.log("this will clear the tic tac toe table, but currently it just refreshes the page to accomplish that")
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    const Squares = []
    for (let x = 0; x < 9; x++) {
        Squares.push(<Square key={x+1} number={x} switchTurns={switchTurns} xGoes={xGoes} />)
    }
    console.log(Squares)
    return (
    <div>
        <table>
        <tbody>
        <tr>
            <Square key={1} number={0} switchTurns={switchTurns} xGoes={xGoes} />
            <Square key={2} number={1} switchTurns={switchTurns} xGoes={xGoes} />
            <Square key={3} number={2} switchTurns={switchTurns} xGoes={xGoes} />
        </tr>
        <tr>
            <Square key={4} number={3} switchTurns={switchTurns} xGoes={xGoes} />
            <Square key={5} number={4} switchTurns={switchTurns} xGoes={xGoes} />
            <Square key={6} number={5} switchTurns={switchTurns} xGoes={xGoes} />
        </tr>
        <tr>
            <Square key={7} number={6} switchTurns={switchTurns} xGoes={xGoes} />
            <Square key={8} number={7} switchTurns={switchTurns} xGoes={xGoes} />
            <Square key={9} number={8} switchTurns={switchTurns} xGoes={xGoes} />
        </tr>
        </tbody>
        </table>
        <button onClick={handleClear}>Clear</button>
    </div>
)

}
const Square = (props) => {
    const [letter, setLetter] = useState("");
    const handleClick = () => {
        if (!letter) {
            setLetter(props.xGoes? "X" : "O")
            props.switchTurns()
        }
    }
    return (
        <td onClick={handleClick}>{letter}</td>
    )

}

export default TicTacToe