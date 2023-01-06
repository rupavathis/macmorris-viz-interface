import React from 'react';
import { useEffect, useState } from "react";
import './style.css'
import './home.scss'
import Map from './core/Map';
import Panel from './panels/Panel';

const darkStyle = 'mapbox://styles/mapbox/dark-v11'
// const darkStyle = 'mapbox://styles/mapbox/satellite-v9';

function Home() {
  const [sites, setSites] = React.useState([]);
  const [siteTypes, setSiteTypes] = React.useState([]);
  const [filteredSites, setFilteredSites] = React.useState([]);
  const [mapStyle, setMapStyle] = React.useState(darkStyle);
  const [historicMap, setHistoricMap] = React.useState("");
  const [countSites, setCountSites] = React.useState([]);
  const [hoverInfo, setHoverInfo] = useState({});


  const fetchSiteData = async () => {
    const sitesRes = await fetch("/sites");
    console.log(sitesRes)
    var sitesJson = await sitesRes.json();
    console.log(sitesJson)
    const siteTypesRes = await fetch("site_types");
    var siteTypesJson = await siteTypesRes.json();
    setSites(sitesJson)
    setFilteredSites(sitesJson);
    setSiteTypes(siteTypesJson)
   
    const countSites = sitesJson.reduce((a,c) => {const count = a[c.place_id]??0; 
                        return {...a, [c.place_id]:count+1}}, {})
    console.log(countSites)
    setCountSites(countSites)    
  };

  useEffect(() => { fetchSiteData(); }, [])

  return (
    <div className='map-container'>
      <Map sites={filteredSites} siteTypes={siteTypes} mapStyle={mapStyle} historicMap={historicMap} 
            countSites={countSites} setHoverInfo={setHoverInfo} />
         
      <Panel siteTypes={siteTypes} sites={sites} setFilteredSites={setFilteredSites} 
      filteredSites={filteredSites} setMapStyle={setMapStyle} setHistoricMap={setHistoricMap} 
      setCountSites={setCountSites}  countSites={countSites} hoverInfo={hoverInfo} />
    </div>    
  );
}

export default Home;

