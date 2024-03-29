import * as React from "react";
import PeopleSearch from "./PeopleSearch.js"
import WorkSearch from "./WorkSearch.js";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormLabel from '@mui/material/FormLabel';

import Container from "@mui/material/Container";

import Accordion from 'react-bootstrap/Accordion';





export default function AdvancedSearch({isNetworkSearch, isNetworkFilter}) {
  const [selectedValue, setSelectedValue] = React.useState('people');

  // setNetwork(networkBool);
  const handleSelectionChange = (event) => {
    console.log(event.target.value);
    setSelectedValue(event.target.value)
  };



  return (
    <Container>
    <Accordion>
    <Accordion.Item eventKey="0">
           
        {!isNetworkSearch && <Accordion.Header>Advanced Search</Accordion.Header>}
        {isNetworkSearch && <Accordion.Header>Search</Accordion.Header>}
        {isNetworkFilter && <Accordion.Header>Filter</Accordion.Header>}

     <Accordion.Body>  
        <FormControl>
          {/* <FormLabel id="demo-row-radio-buttons-group-label">Advanced Search</FormLabel> */}
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="people"
            onChange={handleSelectionChange}
          >
            <FormControlLabel
              value="people"
              control={<Radio />}
              label="People"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        {selectedValue === "people" && !isNetworkSearch && !isNetworkFilter && <PeopleSearch />}
        {selectedValue === "work" && !isNetworkSearch && !isNetworkFilter && <WorkSearch />}
        {selectedValue === "people" && isNetworkSearch && <PeopleSearch isNetworkSearch={true} isNetworkFilter={true}/>}
        {selectedValue === "work" && isNetworkSearch && <WorkSearch isNetworkSearch={true} isNetworkFilter={false}/>}
        {selectedValue === "people" && isNetworkFilter && <PeopleSearch isNetworkSearch={false} isNetworkFilter={true}/>}
        {selectedValue === "work" && isNetworkFilter && <WorkSearch isNetworkSearch={false} isNetworkFilter={true}/>}
      </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    </Container>
  );
}
