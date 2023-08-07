// src/components/Home.js
import React, { useState } from 'react';
import './Home.css'; // Import your CSS file for styles
import NotificationRender from '../NotificationRender/NotificationRender';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
function Home() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return <div className="dashboard-container">
    
    <div ></div>
    <div className="">
      <NotificationRender/>
    </div>
    
  </div>;
}

export default Home;