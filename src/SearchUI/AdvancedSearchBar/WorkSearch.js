import * as React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function WorkSearch() {
  
  const workFormat = {
    options: [{title: "Male"}, {title: "Female"}],
    getOptionLabel: (option) => option.title,
  };

  const language = {  
    options: [{title: "Protestant", name: "Protestant"}, {title: "Catholic", name: "Catholic"}, {title: "Other", name:"Other"}],
    getOptionLabel: (option) => option.title,    
  };

  const workClassification = {  
    options: [{title: "Protestant", name: "Protestant"}, {title: "Catholic", name: "Catholic"}, {title: "Other", name:"Other"}],
    getOptionLabel: (option) => option.title,    
  };

  const dateRange = {  
    options: [{title: "Protestant", name: "Protestant"}, {title: "Catholic", name: "Catholic"}, {title: "Other", name:"Other"}],
    getOptionLabel: (option) => option.title,    
  };

  const place = {  
    options: [{title: "Protestant", name: "Protestant"}, {title: "Catholic", name: "Catholic"}, {title: "Other", name:"Other"}],
    getOptionLabel: (option) => option.title,    
  };

  const displayTitle = {  
    options: [{title: "Protestant", name: "Protestant"}, {title: "Catholic", name: "Catholic"}, {title: "Other", name:"Other"}],
    getOptionLabel: (option) => option.title,    
  };

  const [bardicChecked, setBardicChecked] = React.useState(false);

  const handleBardicChange = (event) => {
    setBardicChecked(event.target.checked);
  };


  return (
    <div>
    <Container>
      <Autocomplete
        {...workFormat}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Work Format" variant="standard" />
        )}
      />
       <Autocomplete
        {...language}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Language" variant="standard" />
        )}
      />
       <Autocomplete
        {...workClassification}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Work Classification" variant="standard" />
        )}
      />
       <Autocomplete
        {...dateRange}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Date range" variant="standard" />
        )}
      />
       <Autocomplete
        {...place}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Place" variant="standard" />
        )}
      />
       <Autocomplete
        {...displayTitle}
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
      <Button variant="outlined">Search</Button> 
</div>
  );
}
