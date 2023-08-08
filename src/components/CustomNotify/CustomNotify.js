import React, { useEffect, useState }from 'react';
import './CustomNotify.css';
function CustomNotify(props) {
  const initialCheckboxes = [
    { id: 1, label: 'Work', checked: false, category: 'work' },
    { id: 2, label: 'Business and Management', checked: false, category: 'business' },
    { id: 3, label: 'Time Management and Productivity', checked: false, category: 'time' },    
    { id: 4, label: 'Health and Wellness', checked: false, category: 'health' },
    { id: 5, label: 'Psychology and Well-being', checked: false, category: 'psychology' },
    { id: 6, label: 'Self-Help and Personal Development', checked: false, category: 'selfhelp' },
    { id: 7, label: 'Motivational and Inspirational', checked: false, category: 'motivation' },
    { id: 8, label: 'Financial Management', checked: false, category: 'finanace' },
    { id: 9, label: 'Family', checked: false, category: 'family' },
  ];

  const [finalReminder, setFinalReminder] = useState([]);
  const [reminders, setReminders] = useState([
    {id: 1,text: 'Give yourself a breather! Step away from your desk and take a short walk.', category: 'health', label: 'Health and Wellness'},   
    {id: 2,text: 'Work smart, not just hard. Prioritize tasks, set goals, and focus on what truly matters.',category: 'work', label: 'Work'},
    {id: 3,text: 'Lead by example. Your actions set the tone for your team and shape the company culture.',category: 'business',label: 'Business and Management', },
    {id: 4,text: 'Time is your most valuable resource. Use it wisely to create the life you envision.',category: 'time', label: 'Time Management and Productivity'},
    {id: 5,text: 'Your body loves water. Take a moment to hydrate and feel the benefits.',category: 'health', label: 'Health and Wellness'},
    {id: 6,text: 'Your thoughts shape your reality. Cultivate a positive mindset to create a positive life.',category: 'psychology', label: 'Psychology and Well-being'},
    {id: 7,text: 'You have the power to shape your destiny. Believe in yourself and take intentional steps toward your goals.',category: 'selfhelp', label: 'Self-Help and Personal Development'},
    {id: 8,text: 'The road to success is paved with hard work and determination. Keep moving forward.',category: 'motivation', label: 'Motivational and Inspirational'},
    {id: 9,text: 'Financial success starts with mindful spending. Budget wisely to secure your future.',category: 'finanace', label: 'Financial Management'},
    {id: 10,text: 'Family is where love grows, memories are made, and hearts find a forever home.',category: 'family', label: 'Family'},
    {id: 11,text: 'Stay hydrated! Take a sip of water and keep your body refreshed.',category: 'health', label: 'Health and Wellness'},
    {id: 12,text: 'Embrace challenges as opportunities for growth. Each obstacle is a chance to learn and improve.',category: 'work', label: 'Work'},
    {id: 13,text: 'Strong leadership is about empowering others to succeed. Lift your team, and the business will thrive.',category: 'business',label: 'Business and Management',},
    {id: 14,text: 'Batch similar tasks together. Efficiency increases when your mind stays in a focused zone.',category: 'time', label: 'Time Management and Productivity'},
    {id: 15,text: 'Change is inevitable, but growth is optional. Embrace change as an opportunity for transformation.',category: 'psychology', label: 'Psychology and Well-being'},
    {id: 16,text: 'Inner peace is your greatest armor. Cultivate mindfulness and find serenity amidst life chaos.',category: 'selfhelp', label: 'Self-Help and Personal Development'},
    {id: 17,text: 'Your journey is unique, and your potential is limitless. Keep reaching for the stars.',category: 'motivation', label: 'Motivational and Inspirational'},    
    {id: 18,text: 'Emergency funds are your safety net. Prioritize saving for unexpected expenses.',category: 'finanace', label: 'Financial Management'},
    {id: 19,text: 'Sit like you mean it! Proper posture supports a healthier body and mind.',category: 'health', label: 'Health and Wellness'},
    {id: 20,text: 'Communication is vital. Keep open lines with colleagues, superiors, and clients for smoother collaboration.',category: 'work', label: 'Work'},
    {id: 21,text: 'A well-defined vision is the compass that guides your business toward success. Keep your goals clear.',category: 'business',label: 'Business and Management',},
    {id: 22,text: 'Learn to say "NO" gracefully. Protect your time for what truly matters to you.',category: 'time', label: 'Time Management and Productivity'},
    {id: 23,text: 'A break is a chance to recharge. Take a few minutes to refresh your mind.',category: 'health', label: 'Health and Wellness'},
    {id: 24,text: 'Empathy bridges gaps and builds bridges. Put yourself in others shoes to foster understanding.',category: 'psychology', label: 'Psychology and Well-being'},
    {id: 25,text: 'Be your own biggest supporter. Encourage yourself as you would a dear friend.',category: 'selfhelp', label: 'Self-Help and Personal Development'},
    {id: 26,text: 'Dream big and work diligently. Your efforts will turn your dreams into reality.',category: 'motivation', label: 'Motivational and Inspirational'},
    {id: 27,text: 'Diversify your investments. A well-balanced portfolio can minimize risk and maximize returns.',category: 'finanace', label: 'Financial Management'},
    {id: 28,text: 'Nurture your family relationships like you would a delicate flower, tending to them with love and care.',category: 'family', label: 'Family'},
    {id: 29,text: 'Stretch your legs and refresh your mind. A short walk can work wonders.',category: 'health', label: 'Health and Wellness'},
    {id: 30,text: 'Celebrate achievements, both big and small. Acknowledging progress fuels motivation.',category: 'work', label: 'Work'},    
    {id: 31,text: 'Strategic planning today leads to sustainable success tomorrow. Plan ahead and seize opportunities.',category: 'business',label: 'Business and Management'},
    {id: 32,text: 'Limit distractions. Create a clutter-free workspace to help you stay on track.',category: 'time', label: 'Time Management and Productivity'},
    {id: 33,text: 'Remember, you are capable of overcoming anything. Your strength and resilience are boundless.',category: 'selfhelp', label: 'Self-Help and Personal Development'},
    {id: 34,text: 'You are stronger than you think. Trust your resilience and overcome any obstacle.',category: 'motivation', label: 'Motivational and Inspirational'},
    {id: 35,text: 'Walking is like a mini adventure for your body. Embrace the journey!',category: 'health', label: 'Health and Wellness'},
    {id: 36,text: 'Build a strong credit history. Responsible credit use opens doors to favorable financial opportunities.',category: 'finanace', label: 'Financial Management'},
    {id: 37,text: 'Parenthood may have its tough days, but the love you pour into it will always outweigh the struggles.',category: 'family', label: 'Family'},
    {id: 38,text: 'Stay curious and open-minded. Embrace challenges with a mindset of continuous learning.',category: 'work', label: 'Work'},
    {id: 39,text: 'Stand up, stretch, look at far object and let your eyes rest. Its break time!',category: 'health', label: 'Health and Wellness'},
    {id: 40,text: 'Stay curious and open-minded. Embrace challenges with a mindset of continuous learning.',category: 'business',label: 'Business and Management'},   
    {id: 41,text: 'Mindfulness enhances time management. Stay present in each moment to maximize focus.',category: 'psychology', label: 'Psychology and Well-being'},    
    {id: 42,text: 'Choose positivity. Your thoughts shape your reality, so nurture a positive mindset.',category: 'selfhelp', label: 'Self-Help and Personal Development'},
    {id: 43,text: 'Your passion fuels your purpose. Pursue what sets your soul on fire.',category: 'motivation', label: 'Motivational and Inspirational'},
    {id: 44,text: 'A dollar saved is a dollar earned. Embrace frugality and watch your savings grow.',category: 'finanace', label: 'Financial Management'},
    {id: 45,text: 'Capture the small moments that make life magical. These memories become the treasures of your family.',category: 'family', label: 'Family'}    
  ]);

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
  };

  useEffect(() => {
    const filteredItems = checkboxes.filter((checkbox) => checkbox.checked == true);
    const selectedCategory = filteredItems.map(obj => obj.category);
    localStorage.setItem('selectedCategory', JSON.stringify(selectedCategory));
    const extractedValues = filteredItems.map((item) => item.category);
    const extractedReminder = reminders.filter((rem) => extractedValues.includes(rem.category));
    setFinalReminder(extractedReminder);
  }, [checkboxes]);

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
    displayNotificationsLoop()
  }, [props.messageProp]);

  displayNotificationsLoop(() => {
    const timeSelected = (selectedOption == '30min')?0.5:(selectedOption == '60min')?1:2;
    timeSelected = 30000;
    let clickedRemindersList = [];
    let providedRemindersList = [];
    finalReminder.forEach((reminder, i) => {
      setInterval(() => {
        const newObj1 = { text: reminder.text, category: reminder.category };
        providedRemindersList.push(newObj1);
        localStorage.setItem('sentData', JSON.stringify(providedRemindersList));
        
        const notification = new Notification(reminder.label, {
          body: reminder.text,
        });
    
        notification.onclick = function (event) {
          event.preventDefault();
          const newObj = { text: reminder.text, category: reminder.category };
          clickedRemindersList.push(newObj);
          console.log(clickedRemindersList);
          localStorage.setItem('clickedData', JSON.stringify(clickedRemindersList));
        };

        if (i === finalReminder.length - 1) {
          setTimeout(displayNotificationsLoop, timeSelected); // Restart the loop after a 60-second delay
        }
      }, i * timeSelected); 
    });
    
  });

  return (
    <div>
      <div className="flex-container">
        <div className="flex-item">Specify the categories for which you would like to receive reminders</div>
        <div className="flex-item-2">
          <input  className='styled-input '
            type="text"
            placeholder="Search Category"
            value={filter}
            onChange={handleFilterChange}
          />
          <ul>
            {filteredCheckboxes.map((checkbox) => (
              <li className="listNone" key={checkbox.id}>
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
