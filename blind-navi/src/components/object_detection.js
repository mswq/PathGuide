import React, {useRef, useEffect, useState, use} from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

const ObjectDetection = ( {videoRef}) => {
    const [detections, setDetections] = useState ([]); // storesa objects to display
    const modelRef = useRef(null);                     // stores AI model
    const detectRef = useRef(null);                    // holds animation frame to control starting and stopping detection

    // load the model and start the detection
    useEffect(() => {
        const loadModel = async () => {
            await tf.setBackend("webgl");               // run on GPU
            await tf.ready();                           // wait til the tensorflow is intialized 
            modelRef.current = await cocoSsd.load();    // downloaded pretrained model
            console.log("AI Model Loaded");             
            startDetection();
        };
        loadModel();
    }, []);
    
    // real time detections
    const detectObjects = async () => {
        if (!videoRef.current || !modelRef.current) return;

        const video = videoRef.current.video;

        if (video.readyState === 4) {
            const predictions = await modelRef.current.detect(video);           // runs detection on video stream
            setDetections(predictions);                                         // updates UI
        }

        detectRef.current = requestAnimationFrame(detectObjects);               // runs detectObjects again in the next animation frame (loop) !!!
    };

    const startDetection = () => {
        if (modelRef.current) detectObjects();
    };

    // cancels detection if you switch pages (HOW)!!!
    useEffect (() => {
        return () => {
            if (detectRef.current) cancelAnimationFrame(detectRef.current);
        };
    }, []);


    return (
        <div>
            <h3>Detected Objects: </h3>
                {detections.length >0 ? (
                <ul>
                    {detections.map((obj, index) => (
                        <li key={index}>
                            {obj.class} - {Math.round(obj.score*100)} % confidence
                        </li>
                    ))}
                </ul>
                ) : (
                    <p> Scanning for Objects...</p>
                )}
        </div>
    );
};

export default ObjectDetection;