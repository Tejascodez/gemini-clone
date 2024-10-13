import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../assets/assets';
import { Context } from '../context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt } = useContext(Context);
  

  const toggleSidebar = () => {
    setExtended(!extended);
  };

  return (
    <div className={`sidebar ${extended ? 'extended' : ''}`}>
      <div className="top">
        <img 
          className='menu' 
          src={assets.menu_icon} 
          alt="Menu" 
          aria-label="Menu" 
          onClick={toggleSidebar} 
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="New Chat" aria-label="New Chat" />
          {extended && <p>New Chat</p>}
        </div>
        {extended ? (
          <div className="recent">
            <p className='recent-title'>Recent</p>
            {prevPrompts.map((item, index) => (
              <div 
                key={index} 
                className="recent-entry" 
                onClick={() => setRecentPrompt(item)}
                aria-label={`Recent chat: ${item}`}
              >
                <img src={assets.message_icon} alt="Message" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        ):null}
      </div>
      <div className="bottom">
        <div className="bottom-item">
          <img src={assets.question_icon} alt="Help" aria-label="Help" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item">
          <img src={assets.history_icon} alt="Activity" aria-label="Activity" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item">
          <img src={assets.setting_icon} alt="Settings" aria-label="Settings" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
