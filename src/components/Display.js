import React from 'react';

const Display = (props) =>
{
  return (
    <div className = "Display">
      <div className="info">Hits: {props.stats.hits}</div>
      <div className="info">Strikes: {props.stats.hits}</div>
      <div className="info">Balls: {props.stats.hits}</div>
      <div className="info">Fouls: {props.stats.hits}</div>
    </div>
  );
}

export default Display;