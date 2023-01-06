import React from 'react';
import DeckGL from 'deck.gl';
import Map from 'react-map-gl';
import Pointer from '../../assets/pointer.svg';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState, useRef } from "react";
import "./Map.scss";
import InfoBar from '../tabs/Info';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BitmapLayer, IconLayer } from '@deck.gl/layers';
import mapImg from '../../assets/map_of_munster.jpg';


const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoicnVwYXZhdGhpIiwiYSI6ImNrdTRsZXAyOTE1M3IycXFrNHdjMWNiaDYifQ.CbNM214i-6-BZrn_uVIYCg';

function MapContainer({ sites, siteTypes, mapStyle, historicMap, countSites, setHoverInfo }) {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [tabClose, setTabClose] = useState(false);

  const INITIAL_VIEW_STATE = {
    longitude: -8.625,
    latitude: 52.258,
    zoom: 7,
    maxZoom: 20,
    pitch: 30,
    bearing: 0
  };

  function setSiteColor(d) {
    if (countSites[d.place_id] != 1) return `linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)`;
    if (d.site_type_id === 1) return [76, 0, 153];
    if (d.site_type_id === 2) return [204, 204, 0];
    if (d.site_type_id === 3) return [0, 0, 180];
    if (d.site_type_id === 4) return [255, 128, 0];
    if (d.site_type_id === 5) return [255, 0, 0];
    if (d.site_type_id === 6) return [229, 242, 229];
    if (d.site_type_id === 7) return [0, 153, 0];
  }
  let hoverInfo = {};

  const expandTooltip = info => {
    setHoverInfo(info);
    hoverInfo = info;
    console.log("im in hoverInfo")
    setTabClose(true);
  };

  const getTooltipInfo = (object) => {
    if (object && countSites[object.place_id] != 1)
     return object && `${object.place.name} - ${countSites[object.place_id]} sites`
    return object && `${object.place.name}`
  }

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={({ object }) => getTooltipInfo(object)}>

      <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle={mapStyle} />
      {historicMap === "munster" && <BitmapLayer id='bitmap-layer' bounds={[-10.927044, 51.482099, -8.142172, 52.657056]}
        image={mapImg} />}
      <IconLayer
        id='IconLayer'
        data={sites}
        getColor={d => setSiteColor(d)}
        getIcon={d => 'marker'}
        getPosition={d => [d.place.longitude, d.place.latitude]}
        getSize={d => 4}
        iconAtlas={Pointer}
        iconMapping={{
          marker: {
            x: 0,
            y: 0,
            width: 23,
            height: 25,
            anchorY: 30,
            mask: true
          }
        }}
        sizeScale={8}
        pickable={true}
        autoHighlight={true}
        highlightColor={[0, 0, 128, 128]}
        onClick={expandTooltip}
      />
       {Object.keys(hoverInfo).length != 0 && tabClose && <InfoBar info={hoverInfo.object} countSites={countSites}
        sites={sites} setTabClose={setTabClose} />} 
    </DeckGL>
  )

}

export default MapContainer;
