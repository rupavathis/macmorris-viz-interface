import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import img from "../../assets/image.jpg";
import './tabs.scss';

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
          <div>{value} {indexCount}</div>
          <div>{site.description}</div>
          <hr />
          <div>People Connected </div>
          {site.person_id.map((p) => p.name)}
        </TabPanel>
      }))
  }
  return (
    <div className="tab-wrapper">
      <div className='tab-image'>
        <img src={img} />
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
    </div>

  );
}
