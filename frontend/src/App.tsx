// import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Toolbar from './Toolbar';
import './App.css'

function App() {

  const onclick = async () => {
    let [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
      target: {tabId:tab.id!},
      func: () => {
        alert('Hello from the extension!')
      }
    });
  }

  return (
    <>
      <Toolbar />
      <div className="card">
        <button onClick={onclick} className="btn">
          Click me!
        </button>
      </div>
    </>
  )
}

export default App
