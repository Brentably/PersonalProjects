import React, { useEffect, useState } from 'react';
import Grid from './components/Grid/Grid';
import './App.css';

function App() {
  const [gameGoing, setGameGoing] = useState(false)
  const [lostGame, setLostGame] = useState(false)
  const [int, setInt] = useState(500)
  const [playerLocation, setPlayerLocation] = useState([1, 1])
  const [special, setSpecial] = useState([[-30, 41]])
  
  // sets the players location to whatever block the mouse is hovering over
  const handlePlayerLocation = (event) => {
    if (!event.target.id) return
    let idString = event.target.id
    let id = idString.split(",")
    id = id.map(coord => parseInt(coord))
    // console.log(id)
    setPlayerLocation(id)
  }
  
  // deals with starting and stopping the game

  let id
  const startGame = () => {
    setGameGoing(true)
    setLostGame(false)
    id = setInterval(nextStep, int);
  }
  
  useEffect(() => {
    console.log(special)
    if(special.includes(playerLocation)) {
      setLostGame(true)
      setGameGoing(false)
      clearInterval(id)
      console.log('hey')
    }
  }, [special, playerLocation, id])
  

  
  
  
  // steps the game along
  
  let i = 0
  const nextStep = () => {
    if (lostGame) return
    i++
    
    // steps a two dimensional array
    const step = (twoDArr) => {
      return twoDArr.map(arr => {
        arr[1]++
        return arr
      })
    }

    // adds a new row of blocks (called a "special") after every i steps,
    // otherwise just steps the game along
    if (i === 4) {
      const generateNewSpecial = () => {
        const getRandomInt = (max) => {
          return Math.floor(Math.random() * Math.floor(max));
        }
        let newSpecialVal = getRandomInt(11)
        let newSpecialSet = []
        for (let a = 0; a < 18; a ++) {
          if (a < newSpecialVal || a >= newSpecialVal + 6)
          newSpecialSet.push([a, 0])
        }
        // console.log(newSpecialSet)
        return newSpecialSet
      }

      let newSpecial = generateNewSpecial()
      setSpecial((prevSpecial) => {
        return [...prevSpecial].concat(newSpecial)
      })

      i = 0
    }
    else {
      setSpecial((prevSpecial) => {
        return [...step(prevSpecial)]
      })
    }
    // console.log("step")
  }
  
  

  return (
    <div onMouseOverCapture={handlePlayerLocation}>
    <Grid xSize={18} ySize={18} playerLocation={playerLocation} special={special} />
    <div className="start" style={gameGoing && !lostGame ? {display: "none", cursor: "none"} : {display: "block"}} onClick={startGame}>click here to start</div>
    <div className="start" style={(!lostGame) ? {display: "none", cursor: "none"} : {display: "block"}} onClick={startGame}>You Lost (click to play again)</div>
    </div>
  );
}

export default App;
