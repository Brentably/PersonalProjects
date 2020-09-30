import React, { useEffect, useState } from 'react';
import Grid from './components/Grid/Grid';
import './App.css';

function App() {
  const [gameGoing, setGameGoing] = useState(false)
  const [playerLocation, setPlayerLocation] = useState([1, 1])
  const [special, setspecial] = useState(null)
  


  return (
    <div>
    <Grid xSize={18} ySize={18} playerLocation={playerLocation} special={special} />
    <div className="start" style={gameGoing? {display: "none"} : {display: "block"}}>Hit enter to start</div>
    </div>
  );
}

export default App;
