import React from 'react';
import './style.css'


class TicTacToe extends React.Component {
    constructor() {
        super()
        this.state = {
            xGoes: true,
        } 
    }
    switchTurns = () => {
        this.setState(prevState => ({xGoes: !prevState.xGoes}))
    }
    handleClear = () => {
        console.log("this will clear the tic tac toe table")
    }

    render() {   
        return (
        <div>
            <table>
            <tbody>
            <tr>
                <Square key={1} number={0} switchTurns={this.switchTurns} xGoes={this.state.xGoes} />
                <Square key={2} number={1} switchTurns={this.switchTurns} xGoes={this.state.xGoes} />
                <Square key={3} number={2} switchTurns={this.switchTurns} xGoes={this.state.xGoes} />
            </tr>
            <tr>
                <Square key={4} number={3} switchTurns={this.switchTurns} xGoes={this.state.xGoes} />
                <Square key={5} number={4} switchTurns={this.switchTurns} xGoes={this.state.xGoes} />
                <Square key={6} number={5} switchTurns={this.switchTurns} xGoes={this.state.xGoes} />
            </tr>
            <tr>
                <Square key={7} number={6} switchTurns={this.switchTurns} xGoes={this.state.xGoes} />
                <Square key={8} number={7} switchTurns={this.switchTurns} xGoes={this.state.xGoes} />
                <Square key={9} number={8} switchTurns={this.switchTurns} xGoes={this.state.xGoes} />
            </tr>
            </tbody>
            </table>
            <button onClick={this.handleClear}>Clear</button>
        </div>
    )
}
}
class Square extends TicTacToe {
    constructor() {
        super()
        this.state = {
            letter: ""
        }
    }
    handleClick = () => {
        if (!this.state.letter) {
            this.setState({letter: this.props.xGoes? "X" : "O"})
            this.props.switchTurns()
        }
    }
    render() {
        return (
            <td onClick={this.handleClick}>{this.state.letter}</td>
        )
    }
}

export default TicTacToe