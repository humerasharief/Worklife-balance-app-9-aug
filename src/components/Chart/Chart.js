import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = () => {
  const storedData = localStorage.getItem('data');
  const data = JSON.parse(storedData);
  const filterItemsByCategory = (category) => {
    return data.filter(item => item.category === category);
  };

  const WorkItems = filterItemsByCategory('Work');
  const LifeItems = filterItemsByCategory('Life');
  const ExerciseItems = filterItemsByCategory('Exercise');
  const MotivationItems = filterItemsByCategory('Motivation');
  console.log(WorkItems)
  console.log(LifeItems)
  return (
    <div className='chart'>
      {WorkItems.map((dataPoint) => (
        <ChartBar
          key={dataPoint.category}
          value={WorkItems.length}
          maxValue={10}
          label={dataPoint.category}
        />
      ))}
      {LifeItems.map((dataPoint) => (
        <ChartBar
          key={dataPoint.category}
          value={LifeItems.length}
          maxValue={10}
          label={dataPoint.category}
        />
      ))}
      {ExerciseItems.map((dataPoint) => (
        <ChartBar
          key={dataPoint.category}
          value={ExerciseItems.length}
          maxValue={10}
          label={dataPoint.category}
        />
      ))}
      {MotivationItems.map((dataPoint) => (
        <ChartBar
          key={dataPoint.category}
          value={MotivationItems.length}
          maxValue={10}
          label={dataPoint.category}
        />
      ))}
    </div>)
}
export default Chart;