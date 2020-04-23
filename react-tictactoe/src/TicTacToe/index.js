import React from 'react';
import './style.css'


class TicTacToe extends React.Component {
    constructor() {
        super()
        this.state = {
            xGoes: true
        } 
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        console.log(e.target)
        this.setState({xGoes: !this.state.xGoes})
    }
    render() {   
        return (
            <table onClick={this.handleClick}>
            <tbody>
            <tr>
                <Square key={1} number={0} state={this.state}/>
                <Square key={2} number={1} state={this.state}/>
                <Square key={3} number={2} state={this.state}/>
            </tr>
            <tr>
                <Square key={4} number={3} state={this.state}/>
                <Square key={5} number={4} state={this.state}/>
                <Square key={6} number={5} state={this.state}/>
            </tr>
            <tr>
                <Square key={7} number={6} state={this.state}/>
                <Square key={8} number={7} state={this.state}/>
                <Square key={9} number={8} state={this.state}/>
            </tr>
            </tbody>
        </table>
    )
}
}
class Square extends TicTacToe {
    constructor() {
        super()
        this.state = {
            letter: ""
        }
        this.mark = this.mark.bind(this)
    }
    mark() {
        const { xGoes } = this.props.state
        this.setState(prevState => {
            if (prevState.letter === "") {
                return {
                    letter: xGoes? "X" : "O"
                }
            }
            //if there is no 
            else {

            }
        })
        
    }
    render() {
        return (
            <td onClick={this.mark}><div>{this.state.letter}</div></td>
        )
    }
}

export default TicTacToe