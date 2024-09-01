import React from 'react';

const Card = ({ name, image, url }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer">More Details</a>
    </div>
  );
};

export default Card;
