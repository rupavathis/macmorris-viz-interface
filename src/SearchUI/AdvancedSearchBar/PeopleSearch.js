import * as React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Container from "@mui/material/Container";

export default function PeopleSearch() {
  
  const test = {
    options: [{title: "Male"}, {title: "Female"}],
    getOptionLabel: (option) => option.title,
  };

  const rDesignation = {  
    options: [{title: "Protestant", name: "Protestant"}, {title: "Catholic", name: "Catholic"}, {title: "Other", name:"Other"}],
    getOptionLabel: (option) => option.title,    
  };

  const rSubType = {  
    options: [{title: "Protestant", name: "Protestant"}, {title: "Catholic", name: "Catholic"}, {title: "Other", name:"Other"}],
    getOptionLabel: (option) => option.title,    
  };

  const rOrder = {  
    options: [{title: "Protestant", name: "Protestant"}, {title: "Catholic", name: "Catholic"}, {title: "Other", name:"Other"}],
    getOptionLabel: (option) => option.title,    
  };

  const roles = {  
    options: [{title: "Protestant", name: "Protestant"}, {title: "Catholic", name: "Catholic"}, {title: "Other", name:"Other"}],
    getOptionLabel: (option) => option.title,    
  };

  const roleAttrib = {  
    options: [{title: "Protestant", name: "Protestant"}, {title: "Catholic", name: "Catholic"}, {title: "Other", name:"Other"}],
    getOptionLabel: (option) => option.title,    
  };

  const [selectedRDesignation, setRDesignation] = React.useState(rDesignation[0]);
  const [gender, setGender] = React.useState([]);

  async function fetchGender() {
    // console.log("Inside fetch gender")
    const genderRes = fetch("http://localhost:3000/genders",{
      mode: 'no-cors',
      credentials: 'include',
      method: 'POST'
  })
    const genderJson = (await genderRes).json();
    console.log(genderJson)
    setGender(genderJson)
    console.log(gender)
  }

  return (
    <div>
    <Container>
      <Autocomplete
        multiple
        {...test}
        id="auto-complete"
        autoComplete
        includeInputInList
        onChange={(event, value) => fetchGender(event, value)}
        renderInput={(params) => (
          <TextField {...params} label="Gender" variant="standard" />
        )}
      />
       <Autocomplete
        {...rDesignation}
        id="auto-complete"
        value = {selectedRDesignation}
        autoComplete
        includeInputInList
        onChange = {(event,selectedRDesignation) => {console.log(selectedRDesignation);setRDesignation(selectedRDesignation)}} 
        renderInput={(params) => (
          <TextField {...params} label="Religious designation" variant="standard" />
        )}
      />
       <Autocomplete
        {...rSubType}
        id="auto-complete"
        value = {selectedRDesignation}
        autoComplete
        includeInputInList
        onChange = {(event,selectedRDesignation) => {console.log(selectedRDesignation);setRDesignation(selectedRDesignation)}} 
        renderInput={(params) => (
          <TextField {...params} label="Religious Subtype" variant="standard" />
        )}
      />
       <Autocomplete
        {...rOrder}
        id="auto-complete"
        value = {selectedRDesignation}
        autoComplete
        includeInputInList
        onChange = {(event,selectedRDesignation) => {console.log(selectedRDesignation);setRDesignation(selectedRDesignation)}} 
        renderInput={(params) => (
          <TextField {...params} label="Religious Order" variant="standard" />
        )}
      />
       <Autocomplete
        {...roles}
        id="auto-complete"
        value = {selectedRDesignation}
        autoComplete
        includeInputInList
        onChange = {(event,selectedRDesignation) => {console.log(selectedRDesignation);setRDesignation(selectedRDesignation)}} 
        renderInput={(params) => (
          <TextField {...params} label="Roles" variant="standard" />
        )}
      />
       <Autocomplete
        {...roleAttrib}
        id="auto-complete"
        value = {selectedRDesignation}
        autoComplete
        includeInputInList
        onChange = {(event,selectedRDesignation) => {console.log(selectedRDesignation);setRDesignation(selectedRDesignation)}} 
        renderInput={(params) => (
          <TextField {...params} label="Attributes" variant="standard" />
        )}
      />      
    </Container>
     
</div>
  );
}
