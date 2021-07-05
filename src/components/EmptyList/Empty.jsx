import React from 'react';
import { Link } from 'react-router-dom';

const Empty = () => {
  return (
    <div className="empty-lists">
      <p>
        Nothing found. <Link to="/">Search</Link> and add movies to your list!
      </p>
    </div>
  );
};

export default Empty;
