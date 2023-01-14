/* eslint-disable no-use-before-define */
import React from 'react';
import { useEffect, useState, useMemo } from "react";
import Container from "@mui/material/Container";
import ContentBar from "../ContentBar/ContentBar";
import PeopleSearch from '../AdvancedSearchBar/AdvancedSearchBar';
import './SearchBar.css';
import AsyncSelect from 'react-select/async';
import debounce from 'lodash.debounce';
// import Network from '../../NetworkUI/ContentBar/ContentBar';

export default function SearchBar({isPeople}) {

  const [displayNames, setDisplayNames] = React.useState([]);
  const [searchData, setSearchData] = React.useState(false);
  const [peopleData, setPeopleData] = useState({});
  const [inputValue, setInputValue] = React.useState("");

  const fetchData = async () => {
    const displayNamesRes = await fetch("/names");
    var displayNamesJson = await displayNamesRes.json();
    console.log("displayNamesJson", displayNamesJson)
    setDisplayNames(displayNamesJson)
  };

  useEffect(() => { fetchData(); }, [])

  const onSearchChange = async (
    newValue,
    actionMeta
  ) => {
    setSearchData(true);
    const peopleRes = await fetch(`/people/${newValue.id}`);
    const peopleJson = await peopleRes.json();
    console.log("people json", peopleJson);
    setPeopleData(peopleJson);
  };

  const filterNames = (inputValue) => {
    console.log("Filter names", inputValue)
    const getDisplayDOB = (d) => {

      if (d.date_of_birth != null && d.date_of_death != null)
        return `${d.date_of_birth} - ${d.date_of_death}`

      else if (d.date_of_birth == null && d.date_of_death == null && d.flourishing_date == null)
        return ""

      else if (d.date_of_birth == null && d.date_of_death != null)
        return `D. ${d.date_of_death}`

      else if (d.date_of_birth == null && d.date_of_death == null)
        return `FL. ${d.flourishing_date}`

      else return ""
    }
    return (displayNames.map((d) => ({
      label: d.display_name + ` (${getDisplayDOB(d)})`,
      others: d.other_names, id: d.id
    }))).filter((i) => (i.others !== null &&
      i.others.toLowerCase().includes(inputValue.toLowerCase()) || (i.label.toLowerCase().includes(inputValue.toLowerCase())))
    );
  };

  // const _loadOptions = (
  //   inputValue,
  //   callback
  // ) => {
  //   console.log("inputValue", inputValue)
  //   setTimeout(() => {
  //     callback(filterNames(inputValue));
  //   }, 1000);
  // };
  let timeoutId

  const debounce = (func, delay) => {
    return function () {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        func()
      }, delay)
    }
  }


  const loadOptions = (inputValue) => {
    return new Promise((resolve) => {
      debounce(() => resolve(filterNames(inputValue)), 500)()
    })
  }

  // const loadOptions = debounce(_loadOptions, 300);

  const handleInputChange = (newValue) => {
    // const newInput = newValue.replace(/\W/g, '');
    const newInput = newValue;
    setInputValue(newInput);
    return newInput;
  };

  return (
    <Container>
      <Container>
        {displayNames.length && <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={handleInputChange}
          onChange={onSearchChange}
          getOptionValue={(option) => option.label} 
        />}
      </Container>

      {/* <AdvancedSearch /> */}
      {/* <PeopleSearch isNetworkSearch={true} isNetworkFilter={false}/> */}
      {/* {searchData && <Network data={peopleData}/>} */}
      {/* {searchData && <ContentBar data={peopleData} />} */}
    </Container>
  );
}
