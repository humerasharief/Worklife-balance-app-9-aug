import React, { useState } from 'react';
import './TimePicker.css'; // Import your CSS file for styling
import Button from '@material-ui/core/Button';

function TimePicker(props){
  const receivedObject = props.messageToChild;
  const [hours, setHours] = useState(receivedObject == 'fromLunch' ? 13 : 20);
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

  const handleAddEvent = (event) => {
    const obj = {
      hours: hours,
      minutes: minutes
    };
    props.sendDataToParent(obj);
  };
  
  return (
    <>
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
      
    </div>
    <Button onClick={handleAddEvent} color="primary" className="pad-left">Confirm</Button>
    </>

  );
};

export default TimePicker;
