import { Input, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';

const AddressAutocomplete = () => {
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchInput.length > 2) {
        const url = `https://nominatim.openstreetmap.org/search/?q=${searchInput}&format=json&limit=3`;
        const response = await fetch(url);
        const data = await response.json();
        const results = data.map((result) => ({
          label: result.display_name,
          value: result.display_name,
          lat: result.lat,
          lon: result.lon,
        }));
        setSuggestions(results);
      } else {
        setSuggestions([]);
      }
    };
    fetchSuggestions();
  }, [searchInput]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleItemSelect = (value, lat, lon) => {
    setSearchInput(value);
    //console.log(lat, lon)
    setSuggestions([]);
  };

  return (
    <Box>
      <Typography></Typography>
      <TextField type="text" fullWidth label="Address of your healing practice (please select one from suggestions)" value={searchInput} onChange={handleInputChange} margin="dense"/>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li
              className='address'
              key={suggestion.value}
              onClick={() => handleItemSelect(suggestion.value, suggestion.lat, suggestion.lon)}
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default AddressAutocomplete;
