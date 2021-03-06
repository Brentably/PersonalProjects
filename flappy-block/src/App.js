import React, { useEffect, useState } from 'react';
import Grid from './components/Grid/Grid';
import './App.css';

function App() {
  const [gameGoing, setGameGoing] = useState(false)
  const [lostGame, setLostGame] = useState(false)
  const [int, setInt] = useState(500)
  const [intId, setIntId] = useState(null)
  const [playerLocation, setPlayerLocation] = useState([1, 1])
  const [special, setSpecial] = useState([[-1, -1]])
  const [score, setScore] = useState(null)
  
  
  
  //Hello brent from the future! You have a few bugs to deal with today. 
  // First of all I'd like to point out that the step function is not working completely properly, it will jump a beat after every few steps or so. 
  // moves two blocks every step instead of one
  // 
  // Next I'd like to point out that you never remove the specials from the specials array when they go off screen. Which isn't bad at first but will become a problem later on.
  // solved 
  // Our chief problem though seems to be that the code is not properly detecting when the player hits one of the specials, which should end the game.
  // IDFK  what to do, but YOU, YYOOUUU are wiser and smarter then me. and I believe Aang can save the world Doooo doo doo dooo
  // solved
  // New Issue: when you track the state of the specials, weird stuff is happening with the numbers, like the first array at index 0 is [-1, 19] when it started as [-1, -1], so it must've changed somehow? I'm setting useEffect to run after every update where the special changes, and it's running and console logging the special, but when you look at the specials in the console, they're the same
  
  // checks if player lost
  useEffect(() => {
    // the following confusing if statement just checks if the special array contains an array equivalent to the playerLocation
    // in other words the player hit a wall
    if(special.some((arr) => (arr[0] === playerLocation[0] && arr[1] === playerLocation[1]))) {
      setLostGame(true)
      setGameGoing(false)
      clearInterval(intId)
      setInt(500)
    }
  }, [special, playerLocation, intId])
  

  // score counter
  useEffect(() => {if (special.some((coord) => coord[1] === 18)) setScore((prevScore) => prevScore + 1)}, [special])


  // sets the new interval based on the score
  useEffect(() => {
    if (!score) return
    // if (score % 5 !== 0) return
    setInt((prevInt) => prevInt * 0.98)
    
  }, [score])
  
  //actually speeds up the game based on the new int
  useEffect(() => {
    if (int === 500) return
    clearInterval(intId)
    i=2
    setIntId(setInterval(nextStep, int))
  }, [int])

  
  // sets the players location to whatever block the mouse is hovering over
  const handlePlayerLocation = (event) => {
    if (!event.target.id) return
    let idString = event.target.id
    let id = idString.split(",")
    id = id.map(coord => parseInt(coord))
    console.log(id)
    setPlayerLocation(id)
  }
  


  // deals with starting the game
  const startGame = () => {
    console.clear()
    setSpecial([[-1, -1]])
    setGameGoing(true)
    setLostGame(false)
    setScore(0)
    setIntId(setInterval(nextStep, int));
  }
  
  
  
  
  // steps a two dimensional array
  const step = (twoDArr) => {
    return twoDArr.map(arr => {
      let newArr = [...arr]
      newArr[1] += 1
      return newArr
    })
  }

  //generates a new wall of coordinates to be pushed to the special array
  const generateNewSpecial = () => {
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * Math.floor(max));
    }
    let newSpecialVal = getRandomInt(11)
    let newSpecialSet = []
    for (let a = 0; a <= 17; a++) {
      if (a < newSpecialVal || a >= newSpecialVal + 6)
      newSpecialSet.push([a, 0])
    }
    // console.log(newSpecialSet)
    return newSpecialSet
  }

// steps the game along
  let i = 3
  const nextStep = () => {
    i++
    // adds a new row of blocks (called a "special") after every i steps,
    // otherwise just steps the game along
    
    setSpecial((prevSpecial) => {
      return step([...prevSpecial]).filter((arr) => (arr[0] <= 18 && arr[1] <= 18))
    })
    
    if (i === 4) {
      i = 0
      setSpecial((prevSpecial) => {
        return [...prevSpecial].concat(generateNewSpecial())
      })
    } 
    // console.log("step")
  }
  
  

  return (
    <div>
    <div onMouseOverCapture={handlePlayerLocation} onTouchMoveCapture={handlePlayerLocation}>
    <Grid xSize={18} ySize={18} playerLocation={playerLocation} special={special} score={score}/>
    </div>
    <div className="start" style={!gameGoing && !lostGame ? {display: "block"} : {display: "none", cursor: "none"}} onClick={startGame}>click here to start</div>
    <div className="start" style={(!lostGame) ? {display: "none", cursor: "none"} : {display: "block"}} onClick={startGame}>You Lost <br />click to play again</div>
    {/* below is a button I added for testing */}
    {/* <button onClick={nextStep} style={{position: "absolute", top: "10px", left: "10px"}}>FUCKING CLICK ME</button> */}
    </div>
  );
}

export default App;
