import * as React from "react";
import { useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Container from "@mui/material/Container";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function WorkSearch() {

  const [workFormats, setWorkFormats] = React.useState([]);
  const [languages, setLanguages] = React.useState([]);
  const [workClassifications, setWorkClassifications] = React.useState([]);
  const [dateRange, setDateRange] =  React.useState([]);  
  const [places, setPlaces] = React.useState([]);
  const [displayTitles, setDisplayTitles] = React.useState([]);

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
       {/* <Autocomplete
        {...dateRange}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Date range" variant="standard" />
        )}
      /> */}
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
    <FormGroup>
      <FormControlLabel control={<Checkbox checked={bardicChecked}
      onChange={handleBardicChange}
      inputProps={{ 'aria-label': 'controlled' }}
     />} 
     label="Is bardic poem?" />
    </FormGroup>
    </Container>
</div>
  );
}
