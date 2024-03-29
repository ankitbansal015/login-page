import React from 'react';
import './App.css';
const GraphListing = ({ data, onViewGraph, onDeleteGraph }) => {
  return (
    <div>
      <div className="date-column">
        {data.map((item, index) => (
          <div className="date-row" key={index}>
            <div className="date-value">{item.date}</div>
          </div>
        ))}
      </div>
      <div className="price-column">
        {data.map((item, index) => (
          <div className="price-row" key={index}>
            <div className="price-value">{item.price}</div>
            <div className="graph-actions">
              <button onClick={() => onViewGraph(item)}>View</button>
              <button onClick={() => onDeleteGraph(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphListing;
