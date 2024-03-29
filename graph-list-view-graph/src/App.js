import React, { useState } from 'react';
import GraphListing from './GraphListing.js';
import './App.css';

const App = () => {
  const data = [
    { date: '2023-01-01', price: 17500 },
    { date: '2023-02-01', price: 16000 },
    { date: '2023-03-01', price: 18000 },
    
  ];

  const [selectedGraph, setSelectedGraph] = useState(null);

  const handleViewGraph = (graph) => {
    setSelectedGraph(graph);
  };

  const handleDeleteGraph = (graph) => {
   
  };

  return (
    <div className="app-container">
      <GraphListing
        data={data}
        onViewGraph={handleViewGraph}
        onDeleteGraph={handleDeleteGraph}
      />
      {selectedGraph && (
        <div className="selected-graph">
          <h2>{`Graph for ${selectedGraph.date}`}</h2>
          
        </div>
      )}
    </div>
  );
};

export default App;
