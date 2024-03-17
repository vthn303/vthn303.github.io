import React, { useState } from 'react';
import './Switch.css'; // Import CSS file

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`switch-container ${isOn ? 'right' : 'left'}`} onClick={toggleSwitch}>
      <div className="switch"></div>
      {isOn ? <span className="switch-text">ON</span> : <span className="switch-text">OFF</span>}
    </div>
  );
};

export default Switch;
