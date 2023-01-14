import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import SearchBar from '../../SearchUI/AdvancedSearchBar/AdvancedSearchBar'
import WorkSearch from '../../SearchUI/AdvancedSearchBar/WorkSearch'
import PeopleSearch from '../../SearchUI/AdvancedSearchBar/PeopleSearch'
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';

function Search({ type }) {

  return (
    <div>
   
      <Typography>Search</Typography>
      {type === "people" && <PeopleSearch isNetworkSearch={true} isNetworkFilter={false} />}
      {type === "works" && <WorkSearch isNetworkSearch={true} isNetworkFilter={false} />}
      <Divider style={{ paddingTop: 40 }} />
      <Typography>Filter</Typography>
      {type === "works" && 
        <WorkSearch isNetworkSearch={false} isNetworkFilter={true} /> 
      }
        {type === "people" && 
        <PeopleSearch isNetworkSearch={false} isNetworkFilter={true} /> 
      }
    </div>
  );
}

export default Search;
