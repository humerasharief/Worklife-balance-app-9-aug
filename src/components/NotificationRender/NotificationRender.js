// YourComponent.js
import React, { useEffect, useState } from 'react';
import './NotificationRender.css';
import TimePicker from '../TimePicker/TimePicker'
import CustomNotify from '../CustomNotify/CustomNotify';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
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
  const [otherHoursFromChild, setOtherHoursFromChild] = React.useState(15);
  const [otherMinsFromChild, setOtherMinsFromChild] = React.useState(0);

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

  useEffect(() => {
    const notificationTime = new Date();
    notificationTime.setHours(otherHoursFromChild); // Replace with your desired hour
    notificationTime.setMinutes(otherMinsFromChild); // Replace with your desired minute    
    const currentTime = new Date();
    
    let timeUntilNotification = notificationTime - currentTime;   
    if (timeUntilNotification <= 0) {
      timeUntilNotification += 24 * 60 * 60 * 1000; // Add 24 hours for the next day
    }
    const notificationTimeout = setInterval(() => {
      showNotification(titleCat, msgCat);
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

  const handleClickCustom = () => {
    //setButtonClickCount(prevCount => prevCount + 1);
  };

  const setCatBtn = () => {
    setShowCustomInput(true)
  };

  const setBtnCnf = () => {
    setshowCustomTime(true)
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
          <div className="flex-item-2"><Link color="primary" onClick={setCatBtn }>Click to add custom category</Link></div>
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
              <Link color="primary" className='pad-left' onClick={setBtnCnf }>Confirm</Link>
            </div>   
          </div>
        }        
        {showCustomTime && <div className="flex-container">
          <div className="flex-item">{titleCat}</div>
          <div className="flex-item-2"><TimePicker messageToChild={'fromOthers'} sendDataToParent={handleChildDataOthers}/></div>
        </div> }
        <CustomNotify messageProp={buttonClickCount}/>
      </div>
      <div class="btn-container">
        <div className='successMsg'>When you click notification message, we regard that as you having taken action.</div>
        <div className="container">
            <Button onClick={handleClick } variant="contained" color="primary" className="aligned-button">Click to enable notifications</Button>
        </div> 
      </div>       
    </>
  );
}

export default NotificationRender;




