// src/HomeComponents/HomePage.tsx
import React, { useEffect, useState } from 'react';
import ControlPanel from './ControlPanel';
import useSpeechSynthesis from '../hooks/useSpeechSynthesis';

const HomePage: React.FC = () => {
    const { speak } = useSpeechSynthesis();
    const [description, setDescription] = useState(''); //state to hold the fetched descrption

    useEffect(() => {
        const messageHandler = (message: any) => {
            if (message.action === 'speakText') {
                speak(message.text);
                setDescription(message.text);
            }
        };

        chrome.runtime.onMessage.addListener(messageHandler);
        return () => chrome.runtime.onMessage.removeListener(messageHandler);
    }, [speak]);

    return (
        <div>
            <h2>Screen Reader</h2>
            <ControlPanel onRead={() => speak(description)} />
        </div>
    );
};

export default HomePage;
