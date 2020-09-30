import React, { useEffect, useState } from 'react';
import Grid from './components/Grid/Grid';
import './App.css';

function App() {
  const [gameGoing, setGameGoing] = useState(false)
  const [int, setInt] = useState(500)
  const [playerLocation, setPlayerLocation] = useState([1, 1])
  const [special, setSpecial] = useState([[-30, 41]])
  

  const handlePlayerLocation = (event) => {
    if (!event.target.id) return
    let idString = event.target.id
    let id = idString.split(",")
    id = id.map(coord => parseInt(coord))
    // console.log(id)
    setPlayerLocation(id)
  }



  let i = 0
  const nextStep = () => {
    i++

    // steps a two dimensional array
    const step = (twoDArr) => {
      return twoDArr.map(arr => {
        arr[1]++
        return arr
      })
    }

    if (i == 4) {
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
        console.log(newSpecialSet)
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
    console.log("step")
  }

  const startGame = () => {
    setGameGoing(true)
    let id = setInterval(() => {
      nextStep()
    }, int);
  }
  

  return (
    <div onMouseOverCapture={handlePlayerLocation}>
    <Grid xSize={18} ySize={18} playerLocation={playerLocation} special={special} />
    <div className="start" style={gameGoing? {display: "none", cursor: "none"} : {display: "block"}} onClick={startGame}>click here to start</div>
    </div>
  );
}

export default App;
