import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Introduction.css';
import backgroundImage from './istockphoto-1365669010-612x612.jpg';
import backgroundImage_men from './men_meditate.jpg';
import bcg_men_old from './dad_old.jpg';
import defaultImg from './default_image.jpg'
function Introduction({ sendDataToParent }){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams.get('param1'))
    console.log(queryParams.get('param2'))
    console.log(queryParams.get('param3'));
    
    let template ='<></>';
    const containerStyle_female = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '490px',
        height: '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      };
      const containerStyle_male = {
        backgroundImage: `url(${backgroundImage_men})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: '490px',
        height: '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      };
      const containerStyle_male_old = {
        backgroundImage: `url(${bcg_men_old})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: '490px',
        height: '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      };

      const containerStyle_default = {
        backgroundImage: `url(${defaultImg})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: '490px',
        height: '450px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      };
    if(queryParams.get('param2')>35 && queryParams.get('param3') =='female')
        template = <div className="flex-container">
                        <div className="flex-item"><img src="women.jpg" width="490" height="450" alt="Image Alt Text" /></div>
                        <div className="flex-item-2">first</div>
                    </div>;
    else if(queryParams.get('param2')<35 && queryParams.get('param3') =='female')
        template = <div className="flex-container">
                    <div className="flex-item"><div style={containerStyle_female}>
                    </div></div>
                    <div className="flex-item-2">second</div>
                </div>;
    else if(queryParams.get('param2')>35 && queryParams.get('param3') =='male')
        template = <div className="flex-container">
                <div className="flex-item"><div style={containerStyle_male_old}></div></div>
                <div className="flex-item-2">third</div>
            </div>;
    else if(queryParams.get('param2')<35 && queryParams.get('param3') =='male')
        template = <div className="flex-container">
                <div className="flex-item"><div style={containerStyle_male}></div></div>
                <div className="flex-item-2">fourth</div>
            </div>;
    else
        template = <div className="flex-container">
                <div className="flex-item"><div style={containerStyle_male}></div></div>
                <div className="flex-item-2">fourth</div>
            </div>;
    return (<div className='background-container'>
    <p>Happy day {queryParams.get('param1')}! Great to hear you have chosen healthy lifestyle!!</p>
    <p>We provide customized suggestion based on age & gender</p>
    {template}
    </div>);
}

export default Introduction;