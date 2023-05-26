import React from 'react';
import './ProjectSummary.css';

const ProjectSummary = () => {
  return (
    <div className="project-summary-container">
      <h1 className="text-center">Project Summary</h1>
      <div className="card">
        <p>
          Natural disasters can have devastating impacts on people's lives and infrastructure, often occurring unexpectedly and with little warning. The current disaster management system can be slow to identify the severity of a situation and provide assistance, which can lead to confusion, chaos, and delayed response times that put lives at risk.
        </p>
        <p>
          To address these challenges, our project aims to develop a web application that serves as a notification system for disaster management departments, governments, and local residents. The application will collect and analyze real-time information from Twitter, and provide alerts to disaster management departments with crucial information about the situation on the ground. Additionally, it will send out alerts to local residents with instructions on how to stay safe during the disaster.
        </p>
        <p>
          By leveraging the power of social media and providing timely information, our web application aims to improve the effectiveness of disaster management and response efforts, ultimately helping to save lives and mitigate damage to livelihoods and infrastructure.
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
