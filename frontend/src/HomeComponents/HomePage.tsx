
import React from 'react';
import ControlPanel from './ControlPanel';  // Update the import path as necessary
import useSpeechSynthesis from './useSpeechSynthesis';  // Update the import path as necessary

const HomePage: React.FC = () => {
    const { speak, pause, stop } = useSpeechSynthesis();

    const handleStart = () => {
        speak("Hello, this is your screen reader speaking. What would you like to read today?");
    };

    const handlePause = () => {
        pause();
    };

    const handleStop = () => {
        stop();
    };


    return (
        <div>
            <h1>Welcome to the Screen Reader</h1>
            <ControlPanel
                onStart={handleStart}
                onPause={handlePause}
                onStop={handleStop}
            />
        </div>
    );
};

export default HomePage;
