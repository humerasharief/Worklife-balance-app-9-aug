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
                          {label:'Life', clickedValue: clickedFilter('Life').length, sentValue: sentFilter('Life').length},
                          {label:'Exercise', clickedValue: clickedFilter('Exercise').length, sentValue: sentFilter('Exercise').length},
                          {label:'Motivation', clickedValue: clickedFilter('Motivation').length, sentValue: sentFilter('Motivation').length}]
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