// background.ts

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.action === 'sendText') {
      const utterance = new SpeechSynthesisUtterance(message.text);
      utterance.onend = () => console.log("Finished in speaking...");
      utterance.onerror = (event) => console.error("SpeechSynthesisUtterance.onerror", event.error);

      // Optionally set properties
      utterance.pitch = 1; // 0 to 2
      utterance.rate = 1; // 0.1 to 10
      utterance.volume = 1; // 0 to 1

      window.speechSynthesis.speak(utterance);

      sendResponse({status: "Text spoken"});
  }
  return true; // Indicate that we're handling the response asynchronously
});
