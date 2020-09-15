import React, { useState, useEffect } from "react"
import Grid from "../Grid/Grid"
import "./style.css"

function SnakeGame() {
  const gridSize = 35
  // the first value is supposed to be the snake's head, the rest are it's sequential tail, so... when it moves one block, the first array of snake moves in that direction, and then the rest become the value of the array in front of
  const [snake, setSnake] = useState([
    [15, 15],
    [14, 15],
    [13, 15],
    [12, 15],
  ])
  const [direction, setDirection] = useState(null)
  const [lost, setLost] = useState(false)
  //lastbox is set to the value of the butt every time the snake moves a square... hopefully we 
  let lastBox;

  //the following makes the snake go in the direction of state direction, creating a new array based on the current snake and setting state to the new snake
  useEffect(() => {
    if (!direction) return
    const id = setInterval(() => {
      switch (direction) {
        case "Right":
          setSnake((prevSnake) => {
            const snakeCopy = [...prevSnake]
            snakeCopy.unshift([prevSnake[0][0] + 1, prevSnake[0][1]])
            let lastBox = snakeCopy.pop()
            return snakeCopy
          })
          break
        case "Left":
          setSnake((prevSnake) => {
            const snakeCopy = [...prevSnake]
            snakeCopy.unshift([prevSnake[0][0] - 1, prevSnake[0][1]])
            let lastBox = snakeCopy.pop()
            return snakeCopy
          })
          break
        case "Up":
          setSnake((prevSnake) => {
            const snakeCopy = [...prevSnake]
            snakeCopy.unshift([prevSnake[0][0], prevSnake[0][1] - 1])
            let lastBox = snakeCopy.pop()
            return snakeCopy
          })
          break
        case "Down":
          setSnake((prevSnake) => {
            const snakeCopy = [...prevSnake]
            snakeCopy.unshift([prevSnake[0][0], prevSnake[0][1] + 1])
            let lastBox = snakeCopy.pop()
            return snakeCopy
          })
          break
        default:
          console.log("error")
      }
    }, 100)
    return () => clearInterval(id)
  }, [direction])
  // sets state direction to the direction of the key pressed
  const handleKeyDown = (e) => {
    setLost(false)
    if (!e.key.startsWith("Arrow")) return
    const dir = e.key.substring(5)
    console.log(dir)
    console.log(direction)
    // if (direction !== dir) 
    setDirection(dir)
    // add new code in the future that makes it so you can't go backwards, so the snake can't run into himself just by going backwards

  }

  // adds keydown event listener
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [direction])

  const lostFunction = () => {
    setDirection(null)
    setSnake([
      [15, 15],
      [14, 15],
      [13, 15],
      [12, 15],
    ])
    setLost(true)
  }

  if (snake[0][0] < 0 || snake[0][0] >= gridSize || snake[0][1] < 0 || snake[0][1] >= gridSize) lostFunction()

  return (
    <div>
      <Grid size={gridSize} snake={snake} />
      <h3 style={{ display: lost ? "block" : "none" }}>You lost :( Press any key to play again</h3>
    </div>
  )
}

export default SnakeGame
