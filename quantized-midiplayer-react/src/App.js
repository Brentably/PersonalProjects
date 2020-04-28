import React from 'react';
import renderBoxes from './Components/Boxes/boxes'
import './App.css';

function App() {

  return (
    <div className="container">
      {renderBoxes(10)}
    </div>
  );
}

export default App;
