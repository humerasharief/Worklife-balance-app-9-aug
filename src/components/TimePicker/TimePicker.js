import React, { useState } from 'react';
import './TimePicker.css'; // Import your CSS file for styling

function TimePicker({ sendDataToParent }){
  const [hours, setHours] = useState(20);
  const [minutes, setMinutes] = useState(0);

  const handleHoursChange = (event) => {
    const newHours = parseInt(event.target.value);
    if (newHours >= 0 && newHours <= 23) {
      setHours(newHours);
    }
  };

  const handleMinutesChange = (event) => {
    const newMinutes = parseInt(event.target.value);
    if (newMinutes >= 0 && newMinutes <= 59) {
      setMinutes(newMinutes);
    }
  };

  const sendDataToParentOnClick = () => {
    const obj = {
        hours: hours,
        minutes: minutes
    };
    sendDataToParent(obj);
  };

  return (
    <div className="time-picker">
      <input
        type="number"
        value={hours}
        onChange={handleHoursChange}
        min="0"
        max="23"
      />
      <span>:</span>
      <input
        type="number"
        value={minutes}
        onChange={handleMinutesChange}
        min="0"
        max="59"
      />
      <button onClick={sendDataToParentOnClick}>Confirm the time entered</button>
    </div>
  );
};

export default TimePicker;
