import React, { useState } from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = () => {
  const sentData = localStorage.getItem('sentData');
  const parsedSentData = sentData.length > 0 ? JSON.parse(sentData): [];
  const clickedData = localStorage.getItem('clickedData');
  const selectedCat = localStorage.getItem('selectedCategory');
  const parsedClickedData = clickedData.length > 0 ?JSON.parse(clickedData): [];
  const parsedSelectedCat = selectedCat.length > 0 ?JSON.parse(selectedCat): [];
  const sentFilter = (category) => {
    return parsedSentData.filter(item => item.category === category);
  };
  let activityLevel = 0;
  const clickedFilter = (category) => {
    return parsedClickedData.filter(item => item.category === category);
  };
  const dataPoints = [{label:'Work', category:"work",clickedValue: clickedFilter('work').length, sentValue: sentFilter('work').length},
                          {label:'Business',category:"business", clickedValue: clickedFilter('business').length, sentValue: sentFilter('business').length},
                          {label:'Time', category:"time",clickedValue: clickedFilter('time').length, sentValue: sentFilter('time').length},
                          {label:'Wellness',category:"health", clickedValue: clickedFilter('health').length, sentValue: sentFilter('health').length},
                          {label:'Psychology',category:"psychology", clickedValue: clickedFilter('psychology').length, sentValue: sentFilter('psychology').length},
                          {label:'SelfHelp',category:"selfhelp", clickedValue: clickedFilter('selfhelp').length, sentValue: sentFilter('selfhelp').length},
                          {label:'Motivational',category:"motivation", clickedValue: clickedFilter('motivation').length, sentValue: sentFilter('motivation').length},
                          {label:'Financial',category:"finanace", clickedValue: clickedFilter('finanace').length, sentValue: sentFilter('finanace').length},
                          {label:'Family',category:"family", clickedValue: clickedFilter('family').length, sentValue: sentFilter('family').length},
                        ];
  let clickedCount = 0;
  let sentCount = 0;
  parsedSelectedCat.map((item, index) => {
    clickedCount += clickedFilter(item).length;
    sentCount += sentFilter(item).length;
  });
  return (
    <div className='background-container'>
      <div className='chart' >
        {
          dataPoints.map((dataPoint) => (
            parsedSelectedCat.includes(dataPoint.category) ? (
              <ChartBar
                key={dataPoint.label}
                value={dataPoint.clickedValue}
                maxValue={dataPoint.sentValue}
                label={dataPoint.label}
              />
            ) : (
              null
            )
          ))}
          
      </div>
      <div className="flexSettings">Your overall score for categories you have selected is {Math.round((clickedCount/sentCount) * 100) + '%'}</div>
      <div className="flexSettings"><b>{Math.round((clickedCount/sentCount) * 100) >80 ? "Your progress is excellent. Keep it up": Math.round((clickedCount/sentCount) * 100) > 50 & Math.round((clickedCount/sentCount) * 100) <80 ? "Your progress is good" : "Could be improved"}</b></div>
    </div>)
}
export default Chart;