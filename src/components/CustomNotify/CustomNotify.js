import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function CustomNotify(props) {
  const initialCheckboxes = [
    { id: 1, label: 'Work', checked: false, category: 'Work' },
    { id: 2, label: 'Life', checked: false, category: 'Life' },
    { id: 3, label: 'Exercise', checked: false, category: 'Exercise' },
    // ... more checkboxes
  ];

  const [finalReminder, setFinalReminder] = useState([]);

  const [CheckedReminders, setCheckedReminders] = useState([
  ]);

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

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const notifyUser = () => {
    console.log(finalReminder)
    const timeSelected = (selectedOption == '30min')?0.5:(selectedOption == '60min')?1:2
    for (let i in finalReminder) {
        console.log(selectedOption)
        console.log(timeSelected)
        setInterval(() => {
          const notification = new Notification(finalReminder[i].category, {
            body: finalReminder[i].text
          })
          notification.onclick = function(){
            console.log("dfadsaf")
            console.log({text:finalReminder[i].text, category:finalReminder[i].category})
            setCheckedReminders({text:finalReminder[i].text, category:finalReminder[i].category})
            console.log(CheckedReminders)
              //window.open('http://example.com');
              window.focus();
          };
        }, timeSelected * 60 * 60000);
      }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Filter checkboxes"
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
      <p>How Frequent do you wish to get above selected notifications?</p>
      <label>
        <input
          type="radio"
          value="30min"
          checked={selectedOption === '30min'}
          onChange={handleOptionChange}
        />
        30 mins
      </label>
      <label>
        <input
          type="radio"
          value="60min"
          checked={selectedOption === '60min'}
          onChange={handleOptionChange}
        />
        1 hour
      </label>
      <label>
        <input
          type="radio"
          value="120min"
          checked={selectedOption === '120min'}
          onChange={handleOptionChange}
        />
        2 hours
      </label>
      <p>Selected Option: {selectedOption}</p>
    </div>
    
  );
}

export default CustomNotify;
