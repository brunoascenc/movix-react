import React from 'react';
export const AlertTemplate = ({ options, message }) => (
  <div className="alert-box">
    {options.type === 'info' && ''}
    {message}
  </div>
);
