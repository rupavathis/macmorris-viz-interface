import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import img from "../../assets/image.jpg";
import './tabs.scss';
import ReadMoreReact from 'read-more-react';
import { FormatColorTextSharp } from '@material-ui/icons';
import clsx from 'clsx';
import {
  Link
} from "react-router-dom";


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

export default function TabInfo({ info, countSites, sites }) {
  const [value, setValue] = React.useState(0);
  const [newValue, setNewValue] = React.useState(0);
  const [readLess, setReadLess] = React.useState(false);

  { console.log("hover", { info }) }


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function noOfTabs() {
    console.log("place", countSites[info?.place_id])
    const countArr = Array.from(Array(countSites[info?.place_id])).map((e, i) => i + 1)
    return countArr.map((c) => { console.log("count", c); return <Tab label={c} {...a11yProps(c)} /> })
  }

  function showTabPanelInfo() {

    const sitesInfo = sites.filter((site) => site.place_id === info?.place_id)
    console.log("sitesInfo", sitesInfo);
    let indexCount = -1;
    return (
      sitesInfo.map((site) => {
        indexCount = indexCount + 1;
        console.log("indexCount", indexCount, value)
        return <TabPanel value={value} index={indexCount}>
          {/* <div>{value} {indexCount}</div> */}
          <div>{info.name}</div><hr />
          <ReadMoreReact text={site.description}
            min="50"
            ideal="70"
            max="80"
          // readMoreText="click here" 
          />
          {/* <div className={clsx({ "active": { readLess } })} onClick={() => setReadLess(true)}>
            Read Less </div> */}
          {/* <div>{site.description}</div> */}
          <Link to={`/site/${info.id}`} target="_blank" rel="noopener noreferrer">Click here</Link>

          <hr />
          <div>People Connected </div>

          {site.person_id.map((p) =>
          (<div><Link to={`/profile/${p.id}`}>{p.name}</Link></div>
          ))}
        </TabPanel>
      }))
  }
  return (
    <div className='tab-wrapper'>
      {info.place.name}
      <div className='tab-image'>
        <img src={img} alt={`Image of ${info.place.name}`} />
      </div>
      <div className='tab-number'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
              variant="scrollable"
              scrollButtons="auto">
              {noOfTabs()}
            </Tabs>
          </Box>
        </Box>
      </div>
      <div className='tab-content'>
        {showTabPanelInfo()}
      </div>
      <div>
      </div>

    </div>

  );
}
