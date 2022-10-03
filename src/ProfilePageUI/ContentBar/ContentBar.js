import { Container } from '@mui/system';
import React from 'react';
import Biography from './Biography.js';
import './ContentBar.css';
import Roles from './Roles.js';
import ESources from './ExternalSources.js';
import Works from './Works.js';
import ConnectedPeople from './ConnectedPeople';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {/* <Typography>{children}</Typography> */}
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function ContentBar({bioInfo, roles, sources, connections, works}) {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 
  return (
    <Container>
       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Biography" {...a11yProps(0)} />
          <Tab label="Works" {...a11yProps(1)} />
          <Tab label="Connections" {...a11yProps(2)} />
          <Tab label="External Sources" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Biography bioInfo={bioInfo} />
       
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Works works={works} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ConnectedPeople connections={connections} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ESources sources={sources} />
      </TabPanel> 

      {/* <div className='ContentBar'>
        <div className='FirstBar'>
          <div className='Biography'><Biography bioInfo={bioInfo} /></div>
          <div className='InfoBar'>
            <div className='TopInfo'><TopInfo /></div>
            <div className='Roles'><Roles roles={roles} /></div>

          </div>
        </div>
        <div className='SecondBar'>
          <div className='Works'><Works works={works} /></div>
          <div className='ConnectedPeople'><ConnectedPeople connections={connections} /></div>
          <div className='Sources'><ESources sources={sources} /></div>
        </div>


    </div> */}
    </Container>

  );
}

export default ContentBar;
