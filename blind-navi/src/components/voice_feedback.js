import React, {useEffect, useRef} from "react";

const VoiceFeedback = ({ detections }) => {
    const spokenClasses =  useRef(new Set());

    useEffect(() => {
        const enableVoice = () => {
            const dummy = new SpeechSynthesisUtterance("Voice enabled");
            window.speechSynthesis.speak(dummy);
            window.removeEventListener("click", enableVoice);
        };

        window.addEventListener("click", enableVoice);
        }, []);

    useEffect(() => {
        if (!Array.isArray(detections) || detections.length == 0) return;

        const newObjects = detections.filter(obj => !spokenClasses.current.has(obj.class));

        if (newObjects.length == 0) return;

        newObjects.forEach((obj) => {
            spokenClasses.current.add(obj.class?.toLowerCase());
        })

        const message = detections.map((obj) => `${obj.class} detected`).join(". ");
        
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = "en-US";
        utterance.rate = 1;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);

    }, [detections]);

    return null;
};

export default VoiceFeedback;