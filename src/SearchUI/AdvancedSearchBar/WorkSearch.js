import * as React from "react";
import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Container from "@mui/material/Container";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './WorkSearch.css';
import ContentBar from '../ContentBar/WorkSearchData.js'
import Button from '@mui/material/Button';


export default function WorkSearch() {

  const [workFormats, setWorkFormats] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [workClassifications, setWorkClassifications] = useState([]);
  const [dateRange, setDateRange] =  useState([]);  
  const [places, setPlaces] = useState([]);
  const [displayTitles, setDisplayTitles] = useState([]);
  const [peopleData, setPeopleData] = useState([]);
  const [search, setSearch] = useState(false);

  const handleSearch = async() => {
    setSearch(true);
    const peopleRes = await fetch(`/works/1`);
    const peopleJson = await peopleRes.json();
    setPeopleData(peopleJson);
    console.log("People data", peopleJson);
  };



  const fetchData =  async () => {
    const workFormatRes = await fetch("/work_formats");
    const workFormatJson = await workFormatRes.json();
    console.log("I'm in fetchGenders");
    setWorkFormats(workFormatJson);

    const languages = await fetch("/languages");
    const languagesJson = await languages.json();
    setLanguages(languagesJson)

    const workClassificationsRes = await fetch("/work_classifications");
    const workClassificationsJson = await workClassificationsRes.json();
    setWorkClassifications(workClassificationsJson);

    const placesRes = await fetch("/places");
    const placesJson = await placesRes.json();
    setPlaces(placesJson);

    const worksRes = await fetch("/works");
    const worksJson = await worksRes.json();
    setDisplayTitles(worksJson);

  };


  useEffect(() => {
    fetchData();
  },[]);


  const [bardicChecked, setBardicChecked] = React.useState(false);

  const handleBardicChange = (event) => {
    setBardicChecked(event.target.checked);
  };


  return (
    <div>
    <Container>
      <Autocomplete
        id="auto-complete"
        options={workFormats}
        getOptionLabel={(option) => option.name || ""}
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Work Format" variant="standard" />
        )}
      />
       <Autocomplete
        options={languages}
        getOptionLabel={(option) => option.name || ""}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Language" variant="standard" />
        )}
      />
       <Autocomplete
        options={workClassifications}
        getOptionLabel={(option) => option.name || ""}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Work Classification" variant="standard" />
        )}
      />
       
     
      
       <Autocomplete
        options={places}
        getOptionLabel={(option) => option.name || ""}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Place" variant="standard" />
        )}
      />
       <Autocomplete
        options={displayTitles}
        getOptionLabel={(option) => option.display_title || ""}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Display title" variant="standard" />
        )}
      />   
       <div className="DateRange">
       <div className="DateRangeLabel">Date Range</div>
      <TextField
          id="standard-search"
          label="From"
          type="search"
          variant="standard"
          size="small"
        />
        <div className="DateRangeHyphen">-</div> <TextField
          id="standard-search"
          label="To"
          type="search"
          variant="standard"
          size="small"
        />
      </div>
    <FormGroup className="FormBardic">
      <FormControlLabel control={<Checkbox checked={bardicChecked}
      onChange={handleBardicChange}
      inputProps={{ 'aria-label': 'controlled' }}
     />} 
     label="Is bardic poem?" />
    </FormGroup>
    </Container>
    <Button variant="outlined" onClick={handleSearch}>Search</Button> 
      {search && <ContentBar data={peopleData} />}
</div>
  );
}
