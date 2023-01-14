import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import WorkSearch from '../../SearchUI/AdvancedSearchBar/WorkSearch'

function Filter() {

  return (   
    <Container>
       <WorkSearch isNetworkSearch={false} isNetworkFilter={true}/>
    </Container> 
  );
}

export default Filter;
