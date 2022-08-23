import * as React from "react";
import PeopleSearch from "./PeopleSearch.js"
import WorkSearch from "./WorkSearch.js";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormLabel from '@mui/material/FormLabel';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";




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
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {!isNetworkSearch && <Typography>Advanced Search</Typography>}
        {isNetworkSearch && <Typography>Search</Typography>}
        {isNetworkFilter && <Typography>Filter</Typography>}
      </AccordionSummary>
      <AccordionDetails>
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
        {selectedValue === "people" && isNetworkSearch && <PeopleSearch isNetworkSearch={true} isNetworkFilter={false}/>}
        {selectedValue === "work" && isNetworkSearch && <WorkSearch isNetworkSearch={true} isNetworkFilter={false}/>}
        {selectedValue === "people" && isNetworkFilter && <PeopleSearch isNetworkSearch={false} isNetworkFilter={true}/>}
        {selectedValue === "work" && isNetworkFilter && <WorkSearch isNetworkSearch={false} isNetworkFilter={true}/>}
      </AccordionDetails>
    </Accordion>
    </Container>
  );
}
