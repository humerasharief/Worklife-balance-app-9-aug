import React, { useEffect, useState }from 'react';
import './CustomNotify.css';
function CustomNotify(props) {
  const initialCheckboxes = [
    { id: 1, label: 'Work', checked: false, category: 'Work' },
    { id: 2, label: 'Life', checked: false, category: 'Life' },
    { id: 3, label: 'Exercise', checked: false, category: 'Exercise' },
    { id: 4, label: 'Motivational Messages', checked: false, category: 'Motivation' }
  ];

  const [finalReminder, setFinalReminder] = useState([]);
  const [reminders, setReminders] = useState([
    {
      id: 1,
      text: 'Take a short walk during your break.',
      category: 'Work',
    },
    {
      id: 2,
      text: 'Spend quality time with family and friends.',
      category: 'Life',
    },
    {
      id: 3,
      text: 'Practice mindfulness or meditation.',
      category: 'Life',
    },
    {
        id: 4,
        text: 'Set boundaries for work-related communication.',
        category: 'Work',
      },
      {
        id: 5,
        text: 'Look at a far object',
        category: 'Exercise',
      }]);

  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);
  const [filter, setFilter] = useState('');

  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
    const filteredItems = checkboxes.filter((checkbox) => checkbox.checked == true);
    const extractedValues = filteredItems.map((item) => item.category);
    const extractedReminder = reminders.filter((rem) => extractedValues.includes(rem.category));
    setFinalReminder(extractedReminder)
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredCheckboxes = checkboxes.filter((checkbox) =>
    checkbox.label.toLowerCase().includes(filter.toLowerCase())
  );

  const [selectedOption, setSelectedOption] = useState('30min');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const timeSelected = (selectedOption == '30min')?0.5:(selectedOption == '60min')?1:2;
    let clickedRemindersList = []
    for (let i in finalReminder) {
        setInterval(() => {
          const notification = new Notification(finalReminder[i].category, {
            body: finalReminder[i].text
          })
          notification.onclick = function(){
            const newObj = {text:finalReminder[i].text, category:finalReminder[i].category};
            clickedRemindersList.push(newObj)
            window.focus();
          };
        }, 60000);
      }
  }, [props.messageProp]);

  return (
    <div>
      <div className="flex-container">
        <div className="flex-item">Enter the genre you would be interested in getting reminders</div>
        <div className="flex-item-2">
          <input  className='styled-input '
            type="text"
            placeholder="Search Genre"
            value={filter}
            onChange={handleFilterChange}
          />
          <ul>
            {filteredCheckboxes.map((checkbox) => (
              <li key={checkbox.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={checkbox.checked}
                    onChange={() => handleCheckboxChange(checkbox.id)}
                  />
                  {checkbox.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-container">
        <div className="flex-item">How frequent do you wish to get above selected notifications?</div>
        <div className="flex-item-2">
          <label>
            <input type="radio" value="30min" checked={selectedOption === '30min'} onChange={handleOptionChange}/>
            30 mins
          </label>
          <label>
            <input type="radio" value="60min" checked={selectedOption === '60min'} onChange={handleOptionChange}/>
              1 hour
            </label>
          <label>
            <input type="radio" value="120min" checked={selectedOption === '120min'} onChange={handleOptionChange} />
              2 hours
          </label>
        </div>
      </div> 
    </div>    
  );
}

export default CustomNotify;
