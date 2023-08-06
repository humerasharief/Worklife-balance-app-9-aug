// src/components/Home.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Home.css'; // Import your CSS file for styles
import NotificationRender from '../NotificationRender/NotificationRender';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
function Home() {
  const { param } = useParams();
  
  return <div className="background-container">
    <div ><h2>Happy Day {decodeURIComponent(param)}</h2></div>
    <NotificationRender/>
    sasdf
    asdsadas
    
  </div>;
}

export default Home;