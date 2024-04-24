// Function to extract text from the current webpage
const extractTextContent = () => {
  let text = '';
  // You can modify the selector to better suit the content you want to read
  const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');
  elements.forEach((element) => {
      text += element.textContent + ' ';
  });
  return text.trim();
};

// Send the extracted text to the background script
chrome.runtime.sendMessage({ action: "sendText", text: extractTextContent() });

