// YourComponent.js
import React, { useEffect, useState }from 'react';
import './NotificationRender.css';
import TimePicker from '../TimePicker/TimePicker'
import CustomNotify from '../CustomNotify/CustomNotify';
import Button from '@material-ui/core/Button';
function NotificationRender(props) {
  const showNotification = (msg, bodyMsg) => {
    new Notification(msg, {
      body: bodyMsg,
    });
  };
  const [btnClick, setBtnClick] = useState(false);
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const handleClick = () => {
    setButtonClickCount(prevCount => prevCount + 1);
  };
  const [logoutHoursFromChild, setlogoutHoursFromChild] = React.useState(20);
  const [logoutMinsFromChild, setlogoutMinsFromChild] = React.useState(0);
  const [lunchHoursFromChild, setLunchHoursFromChild] = React.useState(13);
  const [lunchMinsFromChild, setLunchMinsFromChild] = React.useState(0);
  const [message, setMessage] = useState('');   

  useEffect(() => {
    const notificationTime = new Date();
    notificationTime.setHours(lunchHoursFromChild); // Replace with your desired hour
    notificationTime.setMinutes(lunchMinsFromChild); // Replace with your desired minute    
    const currentTime = new Date();
    const timeUntilNotification = notificationTime - currentTime;
    if (timeUntilNotification <= 0) {
      timeUntilNotification += 24 * 60 * 60 * 1000; // Add 24 hours for the next day
    }
    const notificationTimeout = setInterval(() => {
      showNotification('Time to have your lunch', 'Eating at correct time improves your digestion capacity');
    }, timeUntilNotification); 
    return () => {
      clearTimeout(notificationTimeout);
    };
    // Clean up the timeout if the component unmounts or the effect re-runs
      
  }, [buttonClickCount]);

  useEffect(() => {
    const notificationTime = new Date();
    notificationTime.setHours(logoutHoursFromChild); // Replace with your desired hour
    notificationTime.setMinutes(logoutMinsFromChild); // Replace with your desired minute    
    const currentTime = new Date();
    
    const timeUntilNotification = notificationTime - currentTime;   
    if (timeUntilNotification <= 0) {
      timeUntilNotification += 24 * 60 * 60 * 1000; // Add 24 hours for the next day
    }
    const notificationTimeout = setInterval(() => {
      showNotification('Log out in 15 mins', 'Time to go home!');
    }, timeUntilNotification); 
    return () => {
      clearTimeout(notificationTimeout);
    };
  }, [buttonClickCount]);    
  
  const handleChildDataLogout = (obj) => {
    setlogoutHoursFromChild(obj.hours)
    setlogoutMinsFromChild(obj.minutes)
  };

  const handleChildDataLunch = (obj) => {
    setLunchHoursFromChild(obj.hours)
    setLunchMinsFromChild(obj.minutes)
  };
  return (
    <div className="background-container">
      {props.messageProp}
      <h2>Enter your office end time</h2>
      <h2>24-Hour Time Picker</h2>
      <TimePicker sendDataToParent={handleChildDataLogout}/>

      <h2>Enter your lunch time</h2>
      <h2>24-Hour Time Picker</h2>
      <TimePicker sendDataToParent={handleChildDataLunch}/>
      <CustomNotify props={btnClick}/>
      <Button onClick={handleClick } variant="contained" color="primary">Click to enable notifications</Button>
    </div>
  );
}

export default NotificationRender;




