import React from 'react';

const Card = ({ img, name, href, color }) => {
  const NAME = name.charAt(0).toUpperCase() + name.substring(1, name.length);
  
  return (
      <div
      className="card"
      style={{border: `1px solid ${color}`, borderRadius: 2}}
  )
}