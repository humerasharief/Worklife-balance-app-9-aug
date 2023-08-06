import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Chart from '../Chart/Chart';
const Analytics = () => {
    const storedData = localStorage.getItem('data');
    const items = [
        { id: 1, text: 'Task 1', completed: true },
        { id: 2, text: 'Task 2', completed: false },
        { id: 3, text: 'Task 3', completed: true },
        // ... other items
      ];

      const completedCount = items.filter(item => item.completed).length;
  const totalCount = items.length;
    return (<div className="App">
    <Chart />
  </div>)
}

export default Analytics;