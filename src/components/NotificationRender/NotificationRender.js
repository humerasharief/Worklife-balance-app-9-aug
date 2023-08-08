// YourComponent.js
import React, { useEffect, useState } from 'react';
import './NotificationRender.css';
import TimePicker from '../TimePicker/TimePicker'
import CustomNotify from '../CustomNotify/CustomNotify';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
function NotificationRender(props) {
  const showNotification = (msg, bodyMsg) => {
    msg = "Reminder: In 15 mins " + msg;
    new Notification(msg, {
      body: bodyMsg,
    });
  };
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const handleClick = () => {
    setButtonClickCount(prevCount => prevCount + 1);
  };
  const [logoutHoursFromChild, setlogoutHoursFromChild] = React.useState(20);
  const [logoutMinsFromChild, setlogoutMinsFromChild] = React.useState(0);
  const [lunchHoursFromChild, setLunchHoursFromChild] = React.useState(13);
  const [lunchMinsFromChild, setLunchMinsFromChild] = React.useState(0);
  const [otherHoursFromChild, setOtherHoursFromChild] = React.useState(15);
  const [otherMinsFromChild, setOtherMinsFromChild] = React.useState(0);

  useEffect(() => {
    scheduleDailyNotification('logout');
    scheduleDailyNotification('lunch');
    showCustomTime && scheduleDailyNotification('others');
  }, [buttonClickCount]);    

  function get_time_before_given_time(given_hour, given_minute, minutes_before) {
    let total_minutes = (given_hour * 60) + given_minute
    let new_total_minutes = total_minutes - minutes_before
    let new_hour = Math.floor(new_total_minutes / 60);
    let new_minute = new_total_minutes % 60;
    return [new_hour, new_minute];
  }

  function scheduleDailyNotification(msg) {
    const notificationTime = new Date();
    if(msg == 'logout') {
      const [new_hour, new_minute ]= get_time_before_given_time(logoutHoursFromChild, logoutMinsFromChild, 15);
      notificationTime.setHours(new_hour); // Replace with your desired hour
      notificationTime.setMinutes(new_minute); // Replace with your desired minute
    } else if(msg == 'lunch') {
      const [new_hour, new_minute ]= get_time_before_given_time(lunchHoursFromChild, lunchMinsFromChild, 15);
      notificationTime.setHours(new_hour); // Replace with your desired hour
      notificationTime.setMinutes(new_minute); // Replace with your desired minute    
    } else {
      const [new_hour, new_minute ]= get_time_before_given_time(otherHoursFromChild, otherMinsFromChild, 15);
      notificationTime.setHours(new_hour); // Replace with your desired hour
      notificationTime.setMinutes(new_minute);
    }
    const currentTime = new Date();
    let timeUntilNotification = notificationTime - (currentTime);

    if (currentTime >= notificationTime) {
      timeUntilNotification = timeUntilNotification + ((24 * 60 * 60 * 1000));
    }

    const notificationTimeout = setTimeout(() => {
      if(msg == 'logout') {
        showNotification('Time to head out home!', "Don't forget your essentials: keys, wallet, phone. Have a great day!");
        scheduleDailyNotification('logout');
      } else if(msg == 'lunch') {
        showNotification('Time to have your lunch!', 'Fuel up for the rest of the day. Enjoy your meal and take your time to eat mindfully.');
        scheduleDailyNotification('lunch');
      } else {
        showNotification(titleCat, msgCat);
        scheduleDailyNotification('others');
      }
    }, timeUntilNotification);

    return () => {
      clearTimeout(notificationTimeout);
    };
  }
  
  const handleChildDataLogout = (obj) => {
    setlogoutHoursFromChild(obj.hours)
    setlogoutMinsFromChild(obj.minutes)
  };

  const handleChildDataLunch = (obj) => {
    setLunchHoursFromChild(obj.hours)
    setLunchMinsFromChild(obj.minutes)
  };

  const handleChildDataOthers = (obj) => {
    setOtherHoursFromChild(obj.hours)
    setOtherMinsFromChild(obj.minutes)
  };
  const [titleCat, setTitleCat] = useState('');
  const [msgCat, setMsgCat] = useState('');

  const handleTitleCatChange = (e) => {
    setTitleCat(e.target.value);
  };

  const handleMsgCatChange = (e) => {
    setMsgCat(e.target.value);
  };

  const setCatBtn = () => {
    setShowCustomInput(true)
  };

  const setBtnCnf = () => {
    setshowCustomTime(true)
  };

  const setBtnCancel = () => {
    setshowCustomTime(false);
    setShowCustomInput(false)
  };

  const [showCustomInput, setShowCustomInput] =useState(false);
  const [showCustomTime, setshowCustomTime] =useState(false);
  
  return (
    <>
      <div className="background-container notification-renderer">
        <div className="flex-container">
          <div className="flex-item">Your designated time of departure from the office</div>
          <div className="flex-item-2"><TimePicker messageToChild={'fromLogout'} sendDataToParent={handleChildDataLogout}/></div>
        </div>
        <div className="flex-container">
          <div className="flex-item">Indicate your scheduled time for taking a lunch break</div>
          <div className="flex-item-2"><TimePicker messageToChild={'fromLunch'} sendDataToParent={handleChildDataLunch}/></div>
        </div>   
        {!showCustomInput && <div className="flex-container">
          <div className="flex-item"></div>
          <div className="flex-item-2"><Link color="primary" onClick={setCatBtn } >Click to add custom category</Link></div>
          </div>}
        {showCustomInput && !showCustomTime && 
          <div className="flex-container">
            <div className="flex-item">Add custom Category</div>
            <div className="flex-item-2">
              <input  className='styled-input'
                type="text"
                placeholder="Enter Category Title"
                value={titleCat}
                onChange={handleTitleCatChange}
              />
              <input  className='styled-input pad-left'
                type="text"
                placeholder="Enter Reminder Message"
                value={msgCat}
                onChange={handleMsgCatChange}
              />
              <Link color="primary" className='pad-left' onClick={setBtnCnf}>Confirm</Link>
              <Link color="primary" className='pad-left' onClick={setBtnCancel}>Remove</Link>
            </div>   
          </div>
        }        
        {showCustomTime && <div className="flex-container">
          <div className="flex-item">{titleCat}</div>
          <div className="flex-item-2"><TimePicker messageToChild={'fromOthers'} sendDataToParent={handleChildDataOthers}/><Link color="primary" className='pad-left' onClick={setBtnCancel}>Remove</Link></div>
        </div> }
        <CustomNotify messageProp={buttonClickCount}/>
      </div>
      <div className="btn-container">
        <div className='successMsg'>When you click notification message, we regard that as you having taken action.</div>
        <div className="container">
            <Button onClick={handleClick } variant="contained" color="primary" className="aligned-button">Click to enable notifications</Button>
        </div> 
      </div>       
    </>
  );
}

export default NotificationRender;




