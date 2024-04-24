// src/HomeComponents/HomePage.tsx
import React, { useEffect } from 'react';
import ControlPanel from './ControlPanel';
import useSpeechSynthesis from '../hooks/useSpeechSynthesis';
import { fetchAndReadText } from '../utils/chromeUtils';

const HomePage: React.FC = () => {
    const { speak, pause, stop } = useSpeechSynthesis();

    useEffect(() => {
        const messageHandler = (message: any, _sender: chrome.runtime.MessageSender, sendResponse: (response?: any) => void) => {
            if (message.action === 'sendText') {
                speak(message.text);
            }
            sendResponse();
        };

        chrome.runtime.onMessage.addListener(messageHandler);
        return () => chrome.runtime.onMessage.removeListener(messageHandler);
    }, [speak]);

    return (
        <div>
            <h1>Screen Reader</h1>
            <ControlPanel onStart={() => fetchAndReadText()} onPause={pause} onStop={stop} />
        </div>
    );
};

export default HomePage;
