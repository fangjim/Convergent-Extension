import { useState } from 'react';

const useSpeechSynthesis = () => {
    const [speechSynthesisUtterance] = useState(new SpeechSynthesisUtterance());

    const speak = (text: string): void => {
      speechSynthesisUtterance.text = text;
      window.speechSynthesis.speak(speechSynthesisUtterance);
    };

    const pause = () => {
        window.speechSynthesis.pause();
    };

    const resume = () => {
        window.speechSynthesis.resume();
    };

    const stop = () => {
        window.speechSynthesis.cancel();
    };
    return { speak, pause, resume, stop };
};

export default useSpeechSynthesis;
