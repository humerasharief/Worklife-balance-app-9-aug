// src/components/Home.js
import React, { useState } from 'react';
import './Home.css'; // Import your CSS file for styles
import NotificationRender from '../NotificationRender/NotificationRender';
import { useLocation } from 'react-router-dom';
function Home() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const param1 = searchParams.get('param1');
  return <div className="background-container">
    <div ><h2>Happy Day {decodeURIComponent(param1)}</h2></div>
    <NotificationRender/>
  </div>;
}

export default Home;