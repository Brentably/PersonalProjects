import React from 'react';
import './style.css'

class Square extends React.Component {
    constructor(props){
        super()
        this.props = props
        this.state = {
            letter: ""
        }
        this.mark = this.mark.bind(this)
    }
    mark(num) {
        console.log(num)
    }
    render() {
    return (
        <td onClick={() => this.mark(this.props.number)}><div>{this.state.letter}</div></td>
    )
    }
}

class TicTacToe extends React.Component {
    constructor() {
        super()
        this.state = {
            xGoes: true
        } 
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        const box = e.target.firstChild;
        box.innerHTML = this.state.xGoes ? "X" : "O"
        this.setState({xGoes: !this.state.xGoes})
    }
    render() {   
    return (
        <table onClick={this.handleClick}>
            <tbody>
            <tr>
                <Square key={1} number={0} />
                <Square key={2} number={1} />
                <Square key={3} number={2} />
            </tr>
            <tr>
                <Square key={4} number={3} />
                <Square key={5} number={4} />
                <Square key={6} number={5} />
            </tr>
            <tr>
                <Square key={7} number={6} />
                <Square key={8} number={7} />
                <Square key={9} number={8} />
            </tr>
            </tbody>
        </table>
    )
    }
}

export default TicTacToe