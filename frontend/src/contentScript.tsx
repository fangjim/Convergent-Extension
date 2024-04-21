// src/contentScript.ts
const extractText = () => {
  let text = '';
  const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');
  elements.forEach((element) => {
    text += element.textContent + ' ';
  });
  return text;
};

chrome.runtime.sendMessage({ action: "sendText", text: extractText() });
