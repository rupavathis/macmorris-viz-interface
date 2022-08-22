import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';

function SidePanel() {


  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];
const defaultProps = {
  options: top100Films,
  getOptionLabel: (option) => option.title,
};
  return (
    <Container> 
       <b>Search</b>
       {/* <Button variant="contained">Hello World</Button> */}
        <Autocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="People" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Works" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="Religious Designation" variant="standard" />
        )}
      />
    </Container>
  );
}

export default SidePanel;
