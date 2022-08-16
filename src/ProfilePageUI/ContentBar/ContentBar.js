import { Container } from '@mui/system';
import React, { useCallback, useEffect, useState } from 'react';
import Biography from './Biography.js';
import './ContentBar.css';
import TopInfo from './TopInfoBar'
import Roles from './Roles.js';
import ESources from './ExternalSources.js';
import Works from './Works.js';
import ConnectedPeople from './ConnectedPeople';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
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
          <Typography>{children}</Typography>
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

function ContentBar() {
  // id = 3190; //works printer
  // const id = 200;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [id, setId] = useState(-1);

  const [bioInfo, setBioInfo] = useState([]);
  const [roles, setRoles] = useState([]);
  const [sources, setSources] = useState([]);
  const [works, setWorks] = useState([]);
  const [connections, setConnections] = useState([]);

  const fetchBioInfo = useCallback(async (id) => {
    const res = await fetch(`/people/${id}`);
    const resJson = await res.json();
    setBioInfo(resJson);
    // console.log(resJson);
    const attrib = resJson.attribs;
    const roles = await attrib.map((a) => { return a.name });
    setRoles(roles);
    // console.log(roles);
    const sources = [];
    sources.push(resJson.odnb_id);
    sources.push(resJson.dib_id);
    sources.push(resJson.tnop_id);
    sources.push(resJson.wikidata_id);
    sources.push(resJson.ainm_id);
    sources.push(resJson.sdfb);
    // console.log(sources);
    setSources(sources);

    const workRes = await fetch(`/people/${id}/works`);
    const workResJson = await workRes.json();
    console.log(workResJson);

    
    let works = workResJson.reduce((ac,a) => ac.find(x=> x.id === a.id) ? [...ac] : [...ac,a],[]);
    console.log(works);
    setWorks(works);


    const connectionsRes = await fetch(`/people/${id}/connections`);
    const connectionsResJson = await connectionsRes.json();
    console.log(connections, connectionsResJson);
    setConnections(connectionsResJson);

  }, [])


  useEffect(() => { 
    if(document.URL.includes('/profile')){
      const url = document.URL;  
      const id = url.substring(url.lastIndexOf('/') + 1);      
      console.log("id", id);
      setId(id);
    }
    },[]);
    
    useEffect(() => {
      if(id != -1) {
        fetchBioInfo(id);
      }
      }, [id]);
    

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
        <Roles roles={roles} />
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
        </div> */}


      {/* </div> */}
    </Container>

  );
}

export default ContentBar;
