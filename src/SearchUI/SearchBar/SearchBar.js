/* eslint-disable no-use-before-define */
import React from 'react';
import { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Container from "@mui/material/Container";
import ContentBar from "../ContentBar/ContentBar";
import AdvancedSearch from '../AdvancedSearchBar/AdvancedSearchBar';
import './SearchBar.css';


export default function SearchBar() {

  const [displayNames, setDisplayNames] = React.useState([]);
  const [searchData, setSearchData] = React.useState(false);
  const [peopleData, setPeopleData] = useState({});


  const fetchData = async () => {
    const displayNamesRes = await fetch("/names");
    const displayNamesJson = await displayNamesRes.json();
    console.log(displayNamesJson);
    setDisplayNames(displayNamesJson);
  };


  useEffect(() => {
    fetchData();
  }, []);


  const onSearchChange = async (e, v) => {
    setSearchData(true)
    const peopleRes = await fetch(`/people/${v.id}`);
    const peopleJson = await peopleRes.json();
    setPeopleData(peopleJson);
    console.log("People data", peopleJson);
  }

  return (
    // <div className="SearchBarContainer">
      <Container>
        <Container>
        <Autocomplete
          id="highlights-demo"
          style={{ width: 800 }}
          options={displayNames}
          onChange={(e, v) => onSearchChange(e, v)}
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
     
      <AdvancedSearch />
      {searchData && <ContentBar data={peopleData} />}
      </Container>
    // </div>
  );
}

