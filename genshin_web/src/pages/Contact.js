import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="text-center mb-5">Contact Us</h1>

      <div className="row">
        {[
          { name: 'Duyen', email: 'duyenngu@usc.edu' },
          { name: 'Haoran', email: 'shuhr@usc.edu' },
          { name: 'Praveen', email: 'pallu@usc.edu' },
          { name: 'Ziyan', email: 'ziyanpin@usc.edu' },
        ].map((person) => (
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="card-title">{person.name}</h4>
                <p className="card-text">{person.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
