import React, {useRef, useEffect} from "react";
import Webcam from "react-webcam";
import ObjectDetection from "./object_detection";

// useRef -> creates a persistent reference to the webcam's video element
// useEffect -> sets resolution when the component loads 

const WebcamComponent = () => {
    const videoRef = useRef(null);

    useEffect (() => {
        if (videoRef.current) {
            videoRef.current.video.width = 640;
            videoRef.current.video.height = 400;
        }
    }, []);

    return (
        <div>
            <h2> Live Camera Feed </h2>
            <Webcam ref = {videoRef}/>
            <ObjectDetection videoRef = {videoRef} /> 
        </div>
    );
};

export default WebcamComponent;