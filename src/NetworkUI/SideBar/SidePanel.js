import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function SidePanel({toggleMenuBar}) {


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
    <div> 
       Search 
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
      <button onClick={toggleMenuBar}> Search</button>
    </div>
  );
}

export default SidePanel;
