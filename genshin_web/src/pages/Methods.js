import React from 'react';
import './Methods.css';

const Methods = () => {
  return (
    <div className="methods-container">
      <h1 className="text-center">How to Use the Application</h1>
      <div className="card">
        <p>
          Our web application is a comprehensive natural disaster management tool that caters to disaster management departments, governments, and the general public.
        </p>

        <p className="list-title">To the public audience and governments, the web application has the following tabs:</p>
        <ul>
          <li>Map: Displays current natural disaster events verified by emergency management agents.</li>
          <li>About: Provides information about who we are, our project summary, and how to use the application.</li>
          <li>Contact: Enables users to contact us for any questions or concerns.</li>
        </ul>

        <p className="list-title">To disaster emergency agents:</p>
        <p>
          By creating an account and logging in to the web application, disaster emergency agents gain access to additional tabs with specialized functions.
        </p>
        <ul>
          <li>
            Review Alerts: Displays potential natural disaster events detected by our AI model, which processes data from Twitter. This tab provides location, time, and severity prediction for each event. Agents can verify the accuracy of each event before publishing it on the map to ensure the information is up-to-date and reliable.
          </li>
          <li>
            Add Alert: Allows agents to manually create disaster alerts sourced from other media, which will appear directly on the map.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Methods;
