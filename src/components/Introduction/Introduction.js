import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Introduction.css';

function Introduction({ sendDataToParent }){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams.get('param1'))
    console.log(queryParams.get('param2'))
    console.log(queryParams.get('param3'));
    let template ='<></>'
    if(queryParams.get('param2')>35 && queryParams.get('param3') =='female')
        template = <div className="flex-container">
                        <div className="flex-item"><img src="women.jpg" width="600" height="400" alt="Image Alt Text" /></div>
                        <div className="flex-item-2">first</div>
                    </div>;
    else if(queryParams.get('param2')<35 && queryParams.get('param3') =='female')
        template = <div className="flex-container">
                    <div className="flex-item"><img src="women.jpg" width="600" height="400" alt="Image Alt Text" /></div>
                    <div className="flex-item-2">second</div>
                </div>;
    else if(queryParams.get('param2')>35 && queryParams.get('param3') =='male')
        template = <div className="flex-container">
                <div className="flex-item"><img src="women.jpg" width="600" height="400" alt="Image Alt Text" /></div>
                <div className="flex-item-2">third</div>
            </div>;
    else if(queryParams.get('param2')<35 && queryParams.get('param3') =='male')
        template = <div className="flex-container">
                <div className="flex-item"><img src="women.jpg" width="600" height="400" alt="Image Alt Text" /></div>
                <div className="flex-item-2">fourth</div>
            </div>;
    return (<>
    <h3>Happy day {queryParams.get('param1')}! Great to hear you have chosen healthy lifestyle!!</h3>
    <h4>We provide customized suggestion based on age & gender</h4>
    {template}
    </>);
}

export default Introduction;