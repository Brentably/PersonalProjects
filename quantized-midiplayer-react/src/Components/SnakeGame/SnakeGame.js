import React, { useState, useEffect } from "react"
import Grid from "../Grid/Grid"
import "./style.css"

function SnakeGame(props) {
  const { size } = props
  const [snake, setSnake] = useState([15, 15])
  const [direction, setDirection] = useState(null)
  const [lost, setLost] = useState(false)

  //the following makes the block go in the direction of direction
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

  if (snake[0] < 0 || snake[0] >= size || snake[1] < 0 || snake[1] >= size) lostFunction()

  return (
    <div>
      <Grid size={props.size} snake={snake} />
      <h3 style={{ display: lost ? "block" : "none" }}>You lost :( Press any key to play again</h3>
    </div>
  )
}

export default SnakeGame
