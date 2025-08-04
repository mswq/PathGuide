import './App.css';
import React, {useState} from "react";
import WebcamComponent  from './components/webcam_component'; 
import GestureControls  from './components/gesture_controls';
import VoiceFeedback from './components/voice_feedback';

function App() {
  const [detections, setDetections] = useState([]);
  return (
    <div>
      <h1> Blind Navigation Website</h1>
      <WebcamComponent setDetections={setDetections} detections={detections}/> 
      <GestureControls />
      <VoiceFeedback detections={detections} />
    </div>
  );
}

export default App;
