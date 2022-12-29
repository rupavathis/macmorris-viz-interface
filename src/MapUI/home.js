import React from 'react';
import { useEffect, useState } from "react";
import './style.css'
import './home.css'
import MapContainer from './MapContainer';
import FilterContainer from './FilterContainer';


function Home() {
  const [sites, setSites] = React.useState([]);
  const [siteTypes, setSiteTypes] = React.useState([]);
  const [filteredSites, setFilteredSites] = React.useState([]);


  const fetchSiteData = async () => {
    const sitesRes = await fetch("/sites");
    // console.log(sitesRes)
    var sitesJson = await sitesRes.json();
    // console.log(sitesJson)
    const siteTypesRes = await fetch("site_types");
    var siteTypesJson = await siteTypesRes.json();
    setSites(sitesJson)
    setFilteredSites(sitesJson);
    setSiteTypes(siteTypesJson)
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
      <MapContainer sites={filteredSites} siteTypes={siteTypes}/>
      <FilterContainer siteTypes={siteTypes} sites={sites} setFilteredSites={setFilteredSites}/>
    </div>
    
  );
}

export default Home;

