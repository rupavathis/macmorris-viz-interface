/* eslint-disable no-use-before-define */
import React from 'react';
import { useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Container from "@mui/material/Container";


export default function SearchBar() {

  const [displayNames, setDisplayNames] = React.useState([]);

  const fetchData =  async () => {
    const displayNamesRes = await fetch("/names");
    const displayNamesJson = await displayNamesRes.json();
    console.log(displayNamesJson);
    setDisplayNames(displayNamesJson);
  };


  useEffect(() => {
    fetchData();
  },[]);


  return (
    <Container>
        <Autocomplete
      id="highlights-demo"
      style={{ width: 300 }}
      options={displayNames}
      getOptionLabel={(option) => option.display_name}
      renderInput={(params) => (
        <TextField {...params} label="Search with name" variant="outlined" margin="normal" />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.display_name, inputValue);
        const parts = parse(option.display_name, matches);

        return (
          <div>
            {parts.map((part, index) => (
              <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                {part.text}
              </span>
            ))}            
          </div>
        );
      }}
    />
       

    </Container>
 
  );
}

