import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Chart from '../Chart/Chart';
const Analytics = () => {
    return (<div className="App">
    <Chart />
  </div>)
}

export default Analytics;