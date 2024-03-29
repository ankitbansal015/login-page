
import React, { useState } from 'react';
import './App.css';

const GraphForm = () => {
  const [inputs, setInputs] = useState([{ type: '', description: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputs = [...inputs];
    newInputs[index][name] = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, { type: '', description: '' }]);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  return (
    <div className="graph-form-container">
      {inputs.map((input, index) => (
        <div key={index} className="input-row">
          <input
            type="text"
            placeholder="Type (e.g., Crude Palm Oil)"
            name="type"
            value={input.type}
            onChange={(event) => handleInputChange(index, event)}
          />
          <input
            type="text"
            placeholder="Short Description"
            name="description"
            value={input.description}
            onChange={(event) => handleInputChange(index, event)}
          />
          {inputs.length > 1 && (
            <button className="remove-button" onClick={() => handleRemoveInput(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button className="add-button" onClick={handleAddInput}>
        Add Input
      </button>
    </div>
  );
};
	
export default GraphForm;