// src/components/Home.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './Home.css'; // Import your CSS file for styles
import NotificationRender from '../NotificationRender/NotificationRender';

function Home() {
  const { param } = useParams();
  return <div className="background-container">
    <div ><h2>Happy Day {decodeURIComponent(param)}</h2></div>
    
    <NotificationRender/>
    
  </div>;
}

export default Home;