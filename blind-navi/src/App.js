import './App.css';
import React from "react";
import WebcamComponent  from './components/webcam_component'; 
import GestureControls  from './components/gesture_controls';

function App() {
  return (
    <div>
      <h1> Blind Navigation Website</h1>
      <WebcamComponent /> 
      <GestureControls />
    </div>
  );
}

export default App;
