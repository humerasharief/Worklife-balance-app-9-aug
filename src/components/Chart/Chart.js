import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = () => {
  const sentData = localStorage.getItem('sentData');
  const parsedSentData = sentData.length > 0 ? JSON.parse(sentData): [];
  const clickedData = localStorage.getItem('clickedData');
  const parsedClickedData = clickedData.length > 0 ?JSON.parse(clickedData): [];
  const sentFilter = (category) => {
    return parsedSentData.filter(item => item.category === category);
  };

  const clickedFilter = (category) => {
    return parsedClickedData.filter(item => item.category === category);
  };

  const dataPoints = [{label:'Work', clickedValue: clickedFilter('work').length, sentValue: sentFilter('work').length},
                          {label:'Business', clickedValue: clickedFilter('business').length, sentValue: sentFilter('business').length},
                          {label:'Time', clickedValue: clickedFilter('time').length, sentValue: sentFilter('time').length},
                          {label:'Wellness', clickedValue: clickedFilter('health').length, sentValue: sentFilter('health').length},
                          {label:'Psychology', clickedValue: clickedFilter('psychology').length, sentValue: sentFilter('psychology').length},
                          {label:'SelfHelp', clickedValue: clickedFilter('selfhelp').length, sentValue: sentFilter('selfhelp').length},
                          {label:'Motivational', clickedValue: clickedFilter('motivation').length, sentValue: sentFilter('motivation').length},
                          {label:'Financial', clickedValue: clickedFilter('finanace').length, sentValue: sentFilter('finanace').length},
                          {label:'Family', clickedValue: clickedFilter('family').length, sentValue: sentFilter('family').length},
                        ]
  return (
    <div className='chart background-container'>
      {
        dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.clickedValue}
            maxValue={dataPoint.sentValue}
            label={dataPoint.label}
          />
        ))}
    </div>)
}
export default Chart;