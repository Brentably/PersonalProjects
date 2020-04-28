import React from 'react';
import Boxes from './Components/Boxes/boxes'
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Boxes rows={30} />
    </div>
  );
}

export default App;
