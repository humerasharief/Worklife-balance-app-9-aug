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
                        <div className="flex-item-2"><ul>
                        <li><b>Career Advancement and Stability:</b> Women over 35 may still be pursuing career growth and development. A balanced approach helps them focus on professional goals while managing other life commitments.</li>
                        <li><b>Health and Well-being:</b> Prioritizing work-life balance becomes even more important as women age, as it directly impacts their overall health and well-being. Balancing work, family, and personal time helps prevent burnout and stress-related health issues.</li>
                        <li><b>Personal Fulfillment:</b> Women in this age group may seek personal fulfillment and growth, which can be achieved through hobbies, interests, and leisure activities. Balancing work and personal life allows them to invest time in these pursuits.</li>
                        <li><b>Mental Health and Self-Care:</b> As life becomes more complex, it's essential for women to prioritize self-care and mental health. A balanced approach helps them manage stress, anxiety, and other challenges effectively.</li>
                        <li><b>Financial Planning and Retirement:</b> Achieving work-life balance enables women to allocate time for financial planning, retirement savings, and other long-term goals, ensuring a secure future.</li>
                        <li><b>Leadership and Empowerment:</b> Women in this age group may be in positions of leadership and influence. Demonstrating a balanced approach to work and life sets a positive example for others and contributes to gender empowerment.</li>
                        <li><b>Transition and Reinvention:</b> Some women over 35 may be considering career transitions or pursuing new paths. Work-life balance provides the necessary time and space for exploration and reinvention.</li>
                        <li><b>Workplace Flexibility:</b> Balancing work and personal life becomes even more critical as women navigate through various life transitions, including family changes, health considerations, and personal growth.</li>
                        <li><b>Legacy and Impact:</b> A balanced work-life approach allows women to leave a positive legacy, whether through their careers, relationships, or community contributions.</li></ul>
                        </div>
                    </div>;
    else if(queryParams.get('param2')<35 && queryParams.get('param3') =='female')
        template = <div className="flex-container">
                    <div className="flex-item"><div style={containerStyle_female}>
                    </div></div>
                    <div className="flex-item-2"><ul>
                            <li><b>Career Development and Aspirations:</b> Many women in this age group are establishing their careers, aiming for growth and advancement. Balancing work and personal life helps them focus on professional goals without compromising their well-being.</li>
                            <li><b>Family and Caregiving Responsibilities:</b> Women often take on caregiving roles, which can include raising children, caring for elderly parents, or supporting family members. Achieving work-life balance enables them to manage these responsibilities effectively.</li>
                            <li><b>Health and Well-being:</b> Juggling work, family, and personal responsibilities can lead to burnout and stress. A healthy work-life balance allows women to prioritize self-care, mental health, and physical well-being.</li>
                            <li><b>Personal Fulfillment:</b> Women in this age group may be pursuing personal interests, hobbies, and passions. A balanced approach ensures they have time for personal growth and self-enrichment.</li>
                            <li><b>Flexibility and Remote Work:</b> Many younger women value flexible work arrangements, such as remote work or flexible hours. A good work-life balance supports these arrangements, enhancing job satisfaction and productivity.</li>
                            <li><b>Gender Equality and Empowerment:</b> Achieving work-life balance is a critical aspect of gender equality. When women are supported in managing both work and personal responsibilities, they are empowered to thrive in their careers.</li>
                            <li><b>Setting Positive Examples:</b> Younger women who prioritize work-life balance can serve as role models for future generations, challenging traditional norms and encouraging a more balanced approach to life.</li>
                            <li><b>Career Longevity:</b> A healthy work-life balance contributes to career longevity and prevents burnout, enabling women to sustain successful and fulfilling careers over the long term.</li>
                          </ul></div>
                </div>;
    else if(queryParams.get('param2')>35 && queryParams.get('param3') =='male')
        template = <div className="flex-container">
                <div className="flex-item"><div style={containerStyle_male_old}></div></div>
                <div className="flex-item-2"><ul>
                    <li><b>Career Advancement and Stability:</b>  Balancing work and personal life helps men focus on career growth and advancement without sacrificing their well-being and relationships.</li>
                    <li><b>Health and Well-being:</b>  Prioritizing work-life balance is crucial for men's overall health and well-being. It helps prevent burnout, stress-related health issues, and allows them to adopt healthy lifestyle habits.</li>
                    <li><b>Mental Health and Stress Reduction:</b>  A balanced approach helps men manage stress, anxiety, and other mental health challenges, contributing to better emotional well-being.</li>
                    <li><b>Workplace Engagement:</b>  Men in this age group may seek meaningful and fulfilling work. A balanced approach to work and life contributes to increased job satisfaction and engagement.</li>
                    <li><b>Workplace Flexibility:</b>  Achieving work-life balance allows men to take advantage of flexible work arrangements, such as remote work or flexible hours, which can improve overall job satisfaction.</li>
                    <li><b>Financial Planning and Retirement:</b>  Work-life balance provides time for men to plan for their financial future, save for retirement, and make informed decisions about their long-term goals.</li>
                    <li><b>Positive Role Modeling:</b>  Men who prioritize work-life balance set positive examples for their peers, colleagues, and future generations, contributing to a culture of well-being and productivity.</li>
                    <li><b>Mentorship and Leadership:</b>  Achieving work-life balance enables men to take on leadership roles, mentor others, and have a broader impact on their workplaces and communities.</li>
                    <li><b>Legacy and Family Time:</b>  A balanced approach allows men to create lasting memories and meaningful experiences with their families, leaving a positive legacy.</li>
                    <li><b>Continued Learning and Skill Development:</b> Balancing work and personal life allows men to pursue continuous learning, skill development, and personal growth opportunities.</li>
                  </ul>
                </div>
            </div>;
    else
        template = <div className="flex-container">
                <div className="flex-item"><div style={containerStyle_male}></div></div>
                <div className="flex-item-2"><ul>
                    <li><b>Career Growth and Development:</b> Men in their early career stages are often focused on building a strong foundation for their professional lives. Achieving work-life balance allows them to dedicate time and energy to career advancement while maintaining their well-being.</li>
                    <li><b>Personal and Professional Goals:</b> Balancing work and personal life enables men to pursue both personal and professional goals without neglecting either. This can include skill development, networking, and career aspirations.</li>
                    <li><b>Health and Well-being:</b> Prioritizing work-life balance helps men maintain their physical and mental health. It reduces the risk of burnout, stress, and associated health issues.</li>
                    <li><b>Family and Relationships:</b> Work-life balance allows men to nurture and strengthen their relationships with family members, friends, and significant others.</li>
                    <li><b>Parenting and Caregiving:</b> Men who are parents or caregivers benefit from work-life balance by ensuring they can actively participate in their children's upbringing and care.</li>
                    <li><b>Mental Health and Stress Reduction:</b> Juggling various responsibilities can lead to stress and mental health challenges. Prioritizing work-life balance helps men manage stress and improve their overall mental well-being.</li>
                    <li><b>Financial Planning and Stability:</b> A balanced approach allows men to allocate time for financial planning, savings, and investments, contributing to their long-term financial stability.</li>
                    <li><b>Workplace Satisfaction and Productivity:</b> Men who maintain a healthy work-life balance tend to be more satisfied with their jobs and exhibit higher levels of productivity.</li>
                    <li><b>Skill Enhancement and Learning:</b> Work-life balance provides men with the time to acquire new skills, pursue further education, and continuously develop themselves professionally and personally.</li></ul></div>
            </div>;
    return (<div className='background-container'>
    <h3>Happy day {queryParams.get('param1')}! We provide customized suggestion based on age, gender and dashboard to tailor your needs for healthy lifestyle!!!</h3>
    {template}
    </div>);
}

export default Introduction;