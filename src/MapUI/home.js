// app.js
import React from 'react';
import { useEffect, useState, useMemo } from "react";
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import { Map, Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
 } from 'react-map-gl';
import Pin from './pin'
import CITIES from './cities.json';

import ControlPanel from './control-panel';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoicnVwYXZhdGhpIiwiYSI6ImNrdTRsZXAyOTE1M3IycXFrNHdjMWNiaDYifQ.CbNM214i-6-BZrn_uVIYCg';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -8.62380555555555,
  latitude: 52.2583055555555,
  zoom: 7,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
// const data = [
//   {sourcePosition: [53.4068, -6.6022], targetPosition: [53.4068, -6.6026 ]}
// ];

function Home() {

  const [sites, setSites] = React.useState([]);
  const [popupInfo, setPopupInfo] = useState(null);

  const fetchSiteData = async () => {
    const sitesRes = await fetch("/sites");
    var sitesJson = await sitesRes.json();
    console.log(sitesJson)
    setSites(sitesJson)
  };

  useEffect(() => { fetchSiteData(); }, [])
  // const layers = [
  //   new LineLayer({id: 'line-layer', data})
  // ];

  const pins = useMemo(
    () =>
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}>    
          <Pin />
        </Marker>
      )),
    []
  );

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
    // layers={layers}
    >
      <Map
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle='mapbox://styles/rupavathi/ckucpgcma544e17mp3l86hmxq'>
           <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
        {pins}
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              {popupInfo.city}, {popupInfo.state} |{' '}
              <a
                target="_new"
                href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
              >
                Wikipedia
              </a>
            </div>
            <img width="100%" src={popupInfo.image} />
          </Popup>
        )}
      </Map>
      <ControlPanel />
    </DeckGL>
  );
}

export default Home;
