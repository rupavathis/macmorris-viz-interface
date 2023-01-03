import React from 'react';
import { useEffect, useState } from "react";
import './style.css'
import './home.css'
import MapContainer from './MapContainer';
import FilterContainer from './FilterContainer';

const darkStyle = 'mapbox://styles/mapbox/dark-v11'


function Home() {
  const [sites, setSites] = React.useState([]);
  const [siteTypes, setSiteTypes] = React.useState([]);
  const [filteredSites, setFilteredSites] = React.useState([]);
  const [mapStyle, setMapStyle] = React.useState(darkStyle);
  const [historicMap, setHistoricMap] = React.useState("");
  const [countSites, setCountSites] = React.useState([]);

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


  // const pins = () => { return(
  //     sites.map((site, index) => (
  //       <Marker
  //         key={`marker-${index}`}
  //         longitude={site.place.longitude}
  //         latitude={site.place.latitude}
  //         anchor="bottom"       
  //         onClick={e => {
  //           // If we let the click event propagates to the map, it will immediately close the popup
  //           // with `closeOnClick: true`
  //           e.originalEvent.stopPropagation();
  //           setPopupInfo(site);
  //         }}>          
  //           <Pin pinStyle={site.site_type_id}/>
  //       </Marker>
  //     ))
  // )}

 
 
  return (
    <div>
      <MapContainer sites={filteredSites} siteTypes={siteTypes} mapStyle={mapStyle} historicMap={historicMap} countSites={countSites}/>
      <FilterContainer siteTypes={siteTypes} sites={sites} setFilteredSites={setFilteredSites} 
      filteredSites={filteredSites} setMapStyle={setMapStyle} setHistoricMap={setHistoricMap} setCountSites={setCountSites} />
    </div>
    
  );
}

export default Home;

