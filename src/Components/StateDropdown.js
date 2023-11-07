import React from 'react';

const StateDropdown = ({ states, selectedState, handleStateChange }) => (
  <select value={selectedState} onChange={handleStateChange}>
    <option value="">Select State</option>
    {states.map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ))}
  </select>
);

export default StateDropdown;
