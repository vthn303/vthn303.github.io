import { useState } from 'react'

import '../Switch/Switch.scss'
const Switch = () => {

    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => {
        setIsOn(!isOn);
    }

  return (
    <div className={`toggle-container ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
        <div className="switch">
            <div className="circle"></div>
        </div>
    </div>


  )
};

export default Switch