import React from 'react';
import './Error.css';

const Error = () => {
  return (
    <div className="not-available-container">
      <div className="error-content">
        <h1>404</h1>
        <p>Page Not Found</p>
        <div className="animated-bar"></div>
      </div>
    </div>
  );
};

export default Error;
