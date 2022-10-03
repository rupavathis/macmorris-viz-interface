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
import Select from 'react-select';
import AsyncSelect from 'react-select/async';



export default function SearchBar() {

  const [displayNames, setDisplayNames] = React.useState([]);
  const [searchNames, setSearchNames] = React.useState([]);
  const [searchData, setSearchData] = React.useState(false);
  const [peopleData, setPeopleData] = useState({});
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(null);
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const [colors, setColors] = useState([]);

  // const [loading, setLoading] = useState(false);


  const loading = open && displayNames.length === 0;


  const fetchData = async () => {
    const displayNamesRes = await fetch("/names");
    var displayNamesJson = await displayNamesRes.json();
    console.log(displayNamesJson)
    setDisplayNames(displayNamesJson)

    // setDisplayNames(
    //   [{
    //     date_of_birth: null,
    //     date_of_death: "1540",
    //     display_name: "Richard Delahide"
    //   },
    //   {
    //     date_of_birth: null,
    //     date_of_death: "1540",
    //     display_name: "Venice Delahide"
    //   },
    //   {
    //     date_of_birth: null,
    //     date_of_death: "1540",
    //     display_name: "Mary Delahide"
      // }]
    // )
    // for(var d in displayNamesJson){
    //   console.log(d.display_name)
    //   d.display_name += d.date_of_birth;
    // }

    // setLoadOptions(displayNames.map((d) => ({label: d.display_name})));
    // temp2 = temp1.map((d) => d.display_name + d.date_of_birth)
    // displayNamesJson = displayNamesJson.map((d) => {console.log(d.display_name + d.date_of_birth); 
    //   return (d.display_name = d.display_name +"iop"+ d.date_of_birth)});
    // setDisplayNames(displayNamesJson.map((d) => (d.display_name = d.display_name +"iop"+ d.date_of_birth)));


    // return displayNamesJson

    // const searchN = displayNamesJson.filter(data => data.other_names !== null && data.other_names !== "");
    // console.log(searchN)
  };


  const fetchSearchData = async () => {

  }
  const inputHasChanged = useMemo(() => pDebounce(fetchSearchData, 500), [inputValue]);

  // useEffect(() => {
  //   let active = true;
  //   setColors([ { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  //   { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  //   { value: 'purple', label: 'Purple', color: '#5243AA' }]);
  //   if (!loading) {
  //     return undefined;
  //   }
  //   (async () => {
  //     if (active) {
  //       fetchData();
  //     }
  //   })();
  //   return () => {
  //     active = false;
  //   };

  // }, [loading, value]);

  useEffect(() => { fetchData(); }, [])

  const onSearchChange = async (e, v) => {
    setSearchData(true)
    const peopleRes = await fetch(`/people/${v.id}`);
    const peopleJson = await peopleRes.json();
    setPeopleData(peopleJson);
    // console.log("People data", peopleJson);
  }

  const handleChange = event => {
    event.preventDefault();
    console.log("User has entered" + event.target.value);
    setInputValue(event.target.value);
    inputHasChanged();
  };

  const filterColors = (inputValue) => {
    // return (displayNames.map((d) => ({label: d.display_name}))).filter((i) =>
    //   i.display_name.toLowerCase().includes(inputValue.toLowerCase())
    // );
    console.log("Filter", inputValue)
    console.log("Filter colors", (displayNames.map((d) => ({label: d.display_name + "" + d.macmorris_id, others: d.other_names}))).filter((i) =>(i.others !== null &&
      i.others.toLowerCase().includes(inputValue.toLowerCase()) || (i.label.toLowerCase().includes(inputValue.toLowerCase())))
    ));
    
    return (displayNames.map((d) => ({label: d.display_name+ " (" + d.date_of_birth + " - " + d.date_of_death + ")", 
      others: d.other_names}))).filter((i) => (i.others !== null &&
      i.others.toLowerCase().includes(inputValue.toLowerCase()) || (i.label.toLowerCase().includes(inputValue.toLowerCase())))
    );

 
      
 
  };

  const loadOptions = (
    inputValue,
    callback
  ) => {
    console.log("inputValue", inputValue)
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  const handleInputChange = (newValue) => {
    const newInput = newValue.replace(/\W/g, '');
    setInputValue(newInput);
    return newInput;
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
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
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
            // onChange={handleChange}
            />
          )}
        /> 
        {/* <Select options={displayNames.map((d) => ({ label: d.display_name }))} /> */}
        {displayNames.length && <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={handleInputChange}
        />}
      </Container>

      <AdvancedSearch />
      {searchData && <ContentBar data={peopleData} />}
    </Container>
  );
}
