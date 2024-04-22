
import React from 'react';
import ControlPanel from './ControlPanel';  // Update the import path as necessary
import useSpeechSynthesis from './useSpeechSynthesis';  // Update the import path as necessary

const HomePage: React.FC = () => {
    const { speak, pause, stop } = useSpeechSynthesis();

    const handleStart = () => {
        // Fetch the HTML content of the website
        chrome.tabs.query({active:true,currentWindow:true}, tabs => {
            let url = tabs[0].url;
            fetch(String(url))
                .then(response => response.text())
                .then(html => {
                    // Create a temporary element to parse the HTML
                    const tempElement = document.createElement('div');
                    tempElement.innerHTML = html;

                    // Find all image elements in the HTML
                    const imageElements = tempElement.getElementsByTagName('img');

                    // Extract the source links from the image elements
                    const imageSrcLinks = Array.from(imageElements).map(img => img.src);

                    // Do something with the image source links
                    console.log(imageSrcLinks);
                })
                .catch(error => {
                    console.error('Error fetching HTML:', error);
                });
        })
        
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
