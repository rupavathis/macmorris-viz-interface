/* eslint-disable no-use-before-define */
import React, { version } from 'react';
import { useEffect, useState, useMemo } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import Container from "@mui/material/Container";
import CircularProgress from '@mui/material/CircularProgress';
import ContentBar from "../ContentBar/ContentBar";
import AdvancedSearch from '../AdvancedSearchBar/AdvancedSearchBar';
import './SearchBar.css';
import debounce from "lodash/debounce";
import pDebounce from 'p-debounce';

export default function SearchBar() {

  const [displayNames, setDisplayNames] = React.useState([]);
  const [searchNames, setSearchNames] = React.useState([]);
  const [searchData, setSearchData] = React.useState(false);
  const [peopleData, setPeopleData] = useState({});
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(null);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = React.useState("");

  // const [loading, setLoading] = useState(false);


  const loading = open  && displayNames.length === 0;

  


  const fetchData = async () => {
    const displayNamesRes = await fetch("/names");
    const displayNamesJson = await displayNamesRes.json();
    console.log(displayNamesJson)
    setDisplayNames(displayNamesJson);
    // return displayNamesJson
   
    // const searchN = displayNamesJson.filter(data => data.other_names !== null && data.other_names !== "");
    // console.log(searchN)
  };


  const fetchSearchData= async () => {
    
  }
  const inputHasChanged = useMemo(() => pDebounce(fetchSearchData, 500), [inputValue]);

  useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }
    (async () => {
      if (active) {
        fetchData();
      }
    })();
    return () => {
      active = false;
    };
  }, [loading, value]);

 

  const onSearchChange = async (e, v) => {
    setSearchData(true)
    const peopleRes = await fetch(`/people/${v.id}`);
    const peopleJson = await peopleRes.json();
    setPeopleData(peopleJson);
    // console.log("People data", peopleJson);
  }

  const handleChange = event => {
    event.preventDefault();
    console.log("User has entered" +event.target.value);
    setInputValue(event.target.value);
    inputHasChanged();
  };

 

  return (
      <Container>
        <Container>
        <Autocomplete
          loading={loading}
          id="highlights-demo"
          style={{ width: 800 }}
          options={displayNames}
          filterOptions={(options) => options}
          filterSelectedOptions
          value={value}
          onChange={(e, v) => onSearchChange(e, v)}
          // onInputChange={(e, newVal) => getSuggestions(e, newVal) }
          // onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
          getOptionLabel={(option) => option.display_name}
          open={open}
          onOpen = {() => setOpen(true)}
          onClose = {() => setOpen(false)}
          renderInput={(params) => (
            <TextField {...params} label="Search with name" variant="outlined" margin="normal" 
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
            onChange={handleChange}
            />
          )}
        />
  </Container>
     
      <AdvancedSearch />
      {searchData && <ContentBar data={peopleData} />}
      </Container>
  );
}
