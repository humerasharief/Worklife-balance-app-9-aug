// YourComponent.js
import React, { useEffect, useState }from 'react';
import './NotificationRender.css';
import TimePicker from '../TimePicker/TimePicker'
import CustomNotify from '../CustomNotify/CustomNotify';
function NotificationRender() {
  const showNotification = (msg, bodyMsg) => {
    new Notification(msg, {
      body: bodyMsg,
    });
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
    const notificationTimeout = setTimeout(() => {
      showNotification('Time to have your lunch', 'Eating at correct time improves your digestion capacity');
    }, timeUntilNotification); 
    return () => {
      clearTimeout(notificationTimeout);
    };
    // Clean up the timeout if the component unmounts or the effect re-runs
      
  }, [lunchHoursFromChild, lunchMinsFromChild]);

  useEffect(() => {
    const notificationTime = new Date();
    notificationTime.setHours(logoutHoursFromChild); // Replace with your desired hour
    notificationTime.setMinutes(logoutMinsFromChild); // Replace with your desired minute    
    const currentTime = new Date();
    const timeUntilNotification = notificationTime - currentTime;
    const notificationTimeout = setTimeout(() => {
      showNotification('Log out in 15 mins', 'Time to go home!');
    }, timeUntilNotification); 
    return () => {
      clearTimeout(notificationTimeout);
    };
  }, [logoutHoursFromChild, logoutMinsFromChild]);    
  
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
      <h2>Enter your office end time</h2>
      <h2>24-Hour Time Picker</h2>
      <TimePicker sendDataToParent={handleChildDataLogout}/>

      <h2>Enter your lunch time</h2>
      <h2>24-Hour Time Picker</h2>
      <TimePicker sendDataToParent={handleChildDataLunch}/>
      <CustomNotify />
    </div>
  );
}

export default NotificationRender;





