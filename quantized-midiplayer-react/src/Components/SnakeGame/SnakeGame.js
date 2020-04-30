import React, { useState, useEffect } from "react"
import Grid from "../Grid/Grid"
import "./style.css"

function SnakeGame() {
  const gridSize = 30;
  const [snake, setSnake] = useState([15, 15])
  const [direction, setDirection] = useState(null)
  const [lost, setLost] = useState(false)

  //the following makes the snake go in the direction of state direction
  useEffect(() => {
    if (!direction) return
    const id = setInterval(() => {
      switch (direction) {
          case "Right":
          setSnake((prevSnake) => [prevSnake[0] + 1, prevSnake[1]])
          break
          case "Left":
          setSnake((prevSnake) => [prevSnake[0] - 1, prevSnake[1]])
          break
        case "Up":
          setSnake((prevSnake) => [prevSnake[0], prevSnake[1] - 1])
          break
        case "Down":
          setSnake((prevSnake) => [prevSnake[0], prevSnake[1] + 1])
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
    setDirection(dir)
    // add new code in the future that makes it so you can't go backwards, so the snake can't run into himself just by going backwards
  }

// adds keydown event listener
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const lostFunction = () => {
    console.log("you lost")
    setDirection(null)
    setSnake([15, 15])
    setLost(true)
  }

  if (snake[0] < 0 || snake[0] >= gridSize || snake[1] < 0 || snake[1] >= gridSize) lostFunction()

  return (
    <div>
      <Grid size={gridSize} snake={snake} />
      <h3 style={{ display: lost ? "block" : "none" }}>You lost :( Press any key to play again</h3>
    </div>
  )
}

export default SnakeGame
