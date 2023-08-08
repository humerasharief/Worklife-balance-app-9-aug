// YourComponent.js
import React, { useEffect, useState } from 'react';
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
    setShowToast(!showToast);
  };
  const [logoutHoursFromChild, setlogoutHoursFromChild] = React.useState(20);
  const [logoutMinsFromChild, setlogoutMinsFromChild] = React.useState(0);
  const [lunchHoursFromChild, setLunchHoursFromChild] = React.useState(13);
  const [lunchMinsFromChild, setLunchMinsFromChild] = React.useState(0);

  useEffect(() => {
    let notificationTime = new Date();
    notificationTime.setHours(lunchHoursFromChild); // Replace with your desired hour
    notificationTime.setMinutes(lunchMinsFromChild); // Replace with your desired minute    
    const currentTime = new Date();
    let timeUntilNotification = notificationTime - currentTime;
    if (timeUntilNotification <= 0) {
      timeUntilNotification += 24 * 60 * 60 * 1000; // Add 24 hours for the next day
    }
    const notificationTimeout = setInterval(() => {
      showNotification('Time to have your lunch', 'Fuel up for the rest of the day. Enjoy your meal and take your time to eat mindfully.');
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
    
    let timeUntilNotification = notificationTime - currentTime;   
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
  const [showToast, setShowToast] = useState(false);
  const toggleToast = () => {
    setShowToast(!showToast);
  };
  return (
    <div className="background-container">

      <div className="flex-container">
        <div className="flex-item">Your designated time of departure from the office</div>
        <div className="flex-item-2"><TimePicker messageToChild={'fromLogout'} sendDataToParent={handleChildDataLogout}/></div>
      </div>
      <div className="flex-container">
        <div className="flex-item">Indicate your scheduled time for taking a lunch break</div>
        <div className="flex-item-2"><TimePicker messageToChild={'fromLunch'} sendDataToParent={handleChildDataLunch}/></div>
      </div>      
      <CustomNotify messageProp={buttonClickCount}/>
      <div className='successMsg'>When you click with the notification message, we regard that as you having taken action.</div>
      <div className="container">
          <Button onClick={handleClick } variant="contained" color="primary" className="aligned-button">Click to enable notifications</Button>
      </div>  
    </div>
  );
}

export default NotificationRender;




