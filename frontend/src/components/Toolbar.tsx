import React, { useState } from 'react';


const Toolbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="toolbar">

      <button
        className={`toolbar__tab ${activeTab === 'home' ? 'active' : ''}`}
        onClick={() => handleTabChange('home')}
      >
        Home
      </button>
      
      <button
        className={`toolbar__tab ${activeTab === 'keyboard' ? 'active' : ''}`}
        onClick={() => handleTabChange('keyboard')}
      >
        Settings
      </button>
    </div>
  );
};

export default Toolbar;