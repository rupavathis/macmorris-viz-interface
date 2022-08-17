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




export default function AdvancedSearch() {
  const [selectedValue, setSelectedValue] = React.useState('people');
  const [search, setSearch] = React.useState(false);

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
        <Typography>Advanced Search</Typography>
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
        {selectedValue === "people" && <PeopleSearch />}
        {selectedValue === "work" && <WorkSearch />}
      </AccordionDetails>
    </Accordion>
    </Container>
  );
}
