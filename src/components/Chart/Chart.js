import React, { useState } from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = () => {
  const sentData = localStorage.getItem('sentData');
  const parsedSentData = sentData.length > 0 ? JSON.parse(sentData): [];
  const clickedData = localStorage.getItem('clickedData');
  const selectedCat = localStorage.getItem('selectedCategory');
  console.log(selectedCat)
  const parsedClickedData = clickedData.length > 0 ?JSON.parse(clickedData): [];
  const parsedSelectedCat = selectedCat.length > 0 ?JSON.parse(selectedCat): [];
  console.log(parsedSelectedCat)
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
  console.log(clickedCount)
  console.log(sentCount)
  return (
    <div className='chart background-container'>
      <>
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
          
      </>
      <div>{Math.round((clickedCount/sentCount) * 100) + '%'}</div>
    </div>)
}
export default Chart;