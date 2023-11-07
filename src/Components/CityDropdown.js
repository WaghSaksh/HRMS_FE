import React from 'react';

const CityDropdown = ({ cities, selectedCity, handleCityChange }) => (
  <select value={selectedCity} onChange={handleCityChange}>
    <option value="">Select City</option>
    {cities.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </select>
);

export default CityDropdown;
