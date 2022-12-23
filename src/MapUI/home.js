// app.js
import React from 'react';
import { useEffect, useState, useMemo } from "react";
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import {
  Map, Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';
import Pin from './pin'
import CITIES from './cities.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import ControlPanel from './control-panel';
import './style.css'
import './home.css'
import {BitmapLayer} from '@deck.gl/layers';
import mapImg from './map_of_munster.jpg';


// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoicnVwYXZhdGhpIiwiYSI6ImNrdTRsZXAyOTE1M3IycXFrNHdjMWNiaDYifQ.CbNM214i-6-BZrn_uVIYCg';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -8.625,
  latitude:  52.258,
  zoom: 7,
  pitch: 0,
  bearing: 0
};


const data = [
  { sourcePosition: [-8.625, 52.258], targetPosition: [-8.625, 52.198] }
];

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


  const pins = () => { return(
      sites.map((site, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={site.place.longitude}
          latitude={site.place.latitude}
          anchor="bottom"       
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(site);
          }}>          
            <Pin pinStyle={site.site_type_id}/>
        </Marker>
      ))
  )}



  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
    >
      <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle='mapbox://styles/rupavathi/ckucpgcma544e17mp3l86hmxq'>
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
        {pins()}
        {popupInfo && (
          <Popup
            anchor="top"
            // longitude={Number(popupInfo.longitude)}
            // latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              {popupInfo.site_id}, {popupInfo.name} |{' '}
             Hi
            </div>            
          </Popup>
        )}
      </Map>   
      {/* <BitmapLayer id='bitmap-layer' bounds={[-122.5190, 37.7045, -122.355, 37.829]} image={mapImg} />   */}
      <BitmapLayer id='bitmap-layer' bounds={[ -10.927044, 51.482099,-8.142172, 52.657056]} image={mapImg} />  
   </DeckGL>
  );
}

export default Home;

