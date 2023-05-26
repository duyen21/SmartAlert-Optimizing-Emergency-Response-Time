import React from 'react';
import './Whoarewe.css';

const Whoarewe = () => {
  return (
    <div className="whoarewe-container">
      <h1 className="text-center">Who are we?</h1>
      <div className="card">
        <p>
          HDPZ, a technology consulting team comprised of Haoran Shu, Duyen Nguyen, Praveen Allu, and Ziyan Ping, aims to provide efficient and effective alerts during natural disaster events with the power of social media by analyzing tweets.
        </p>
        <p>
          With our solution, emergency responders will be able to quickly assess a situation, identify potential hazards based on predicted severity, and allocate resources effectively. Additionally, nearby residents will receive alerts to avoid dangerous areas and stay informed.
        </p>
        <p>
          Our goal is to help keep communities safe and minimize the impact of natural disasters on people's lives and infrastructure. HDPZ is committed to improving its emergency response time and delivering the highest level of service to communities in need.
        </p>
      </div>
    </div>
  );
};

export default Whoarewe;
