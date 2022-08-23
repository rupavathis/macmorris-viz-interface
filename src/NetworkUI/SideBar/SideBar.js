import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
import SearchFilter from './SearchFilter';
// import Filter from "./Filter";

export default function SideBar({isNetworkSearch, isNetworkFilter}) {
  const [selectedValue, setSelectedValue] = React.useState('people');

  const handleSelectionChange = (event) => {
    console.log(event.target.value);
    setSelectedValue(event.target.value)
  };



  return (
    <Container>
        <FormControl>
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
            <FormControlLabel value="works" control={<Radio />} label="Works" />
          </RadioGroup>
        </FormControl>
       
        {selectedValue === "works" && <SearchFilter type={"works"}/> }
        {selectedValue === "people" && <SearchFilter type={"people"}/> }
   
    </Container>
  );
}
