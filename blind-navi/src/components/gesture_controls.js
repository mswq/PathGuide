import React, {useEffect} from "react";

const GestureControls = () => {
    useEffect (() => {
        const handleKeyPress = (event) => {
            if (event.key === "ArrowRight") {
                console.log ("Navigation Mode Activated");
            } else if (event.key === "ArrowLeft") {
                console.log("Obstacle Detection Mode Activator");
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };

    },[]);

    return <h3> Use Arrow Keys to Switch Modes</h3>
};

export default GestureControls;