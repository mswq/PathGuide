# PathGuide - Blind Navigation Website

A real-time, voice-assisted web application that helps blind and visually impaired users understand their surroundings using AI-powered object detection and gesture-based controls.

Built with **React**, **TensorFlow.js**, **COCO-SSD**, and the Web Speech API, this browser-based system uses your webcam to detect objects and speaks them aloud to the user in real time.


## Features

-  **Live Webcam Feed** – Streams the user's surroundings directly from their device camera.
-  **Real-Time Object Detection** – Identifies common objects using the lightweight COCO-SSD model via TensorFlow.js.
-  **Voice Feedback** – Speaks detected objects aloud using the Web Speech API, enhancing situational awareness.

## How It Works

1. Webcam Feed
The app accesses the user's webcam using react-webcam and displays the live feed.

2. Object Detection
coco-ssd runs every frame on the webcam feed to detect objects like “person,” “bottle,” or “chair.” You can swap this model for a more accurate YOLOv8 backend if desired.

3. Voice Feedback
Detected objects are spoken aloud with SpeechSynthesisUtterance. Only new objects are spoken once to reduce repetition.

##  Getting Started
###  Prerequisites

- Node.js (v18+ recommended)
- npm 

###  Installation
1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/blind-navigation.git
   cd blind-navigation

2. **Install Dependencies**
   npm install

3. Run
   npm start

## Future Improvements

-  YOLOv8 backend via Flask for higher accuracy
-  **Gesture Controls**
  - Use hand gestures to trigger commands (e.g. repeat last spoken objects, pause voice, navigate interface)
  - Integration with MediaPipe Hands or custom tracking logic
-  Directional audio feedback (e.g. "person on the left")
