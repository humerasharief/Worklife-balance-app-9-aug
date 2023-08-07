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

  const dataPoints = [{label:'Work', clickedValue: clickedFilter('Work').length, sentValue: sentFilter('Work').length},
                          {label:'Business', clickedValue: clickedFilter('Life').length, sentValue: sentFilter('business').length},
                          {label:'Time', clickedValue: clickedFilter('Exercise').length, sentValue: sentFilter('time').length},
                          {label:'Wellness', clickedValue: clickedFilter('Motivation').length, sentValue: sentFilter('health').length},
                          {label:'Psychology', clickedValue: clickedFilter('Motivation').length, sentValue: sentFilter('psychology').length},
                          {label:'SelfHelp', clickedValue: clickedFilter('Motivation').length, sentValue: sentFilter('selfhelp').length},
                          {label:'Motivational', clickedValue: clickedFilter('Motivation').length, sentValue: sentFilter('motivation').length},
                          {label:'Financial', clickedValue: clickedFilter('Motivation').length, sentValue: sentFilter('finanace').length},
                          {label:'Parenting', clickedValue: clickedFilter('Motivation').length, sentValue: sentFilter('parenting').length},
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