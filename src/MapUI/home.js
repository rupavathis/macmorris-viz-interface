import * as React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./main.scss";
// import pot from './pot.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeatherAlt,
  faSwords,
  faFortAwesome,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import data from "./data.json";

function Main() {
  const [viewport, setViewport] = React.useState({
    latitude: 53.35014,
    longitude: -6.266155,
    zoom: 7,
    // bearing: 0,
    // pitch: 0,
    width: "100vw",
    height: "100vh",
  });
  const [selectedSite, setSelectedSite] = React.useState(null);

  return (
    <div className="mapContainer">
      <ReactMapGL
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapboxApiAccessToken={
          "pk.eyJ1IjoicnVwYXZhdGhpIiwiYSI6ImNrdTRsZXAyOTE1M3IycXFrNHdjMWNiaDYifQ.CbNM214i-6-BZrn_uVIYCg"
        }
        mapStyle="mapbox://styles/rupavathi/ckucpgcma544e17mp3l86hmxq"
      >
        {data.map((d) => {
          return (
            <Marker
              key={d.Person_ID}
              latitude={d.latitude}
              longitude={d.longitude}
            >
              <button
                class="button"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedSite(d);
                }}
              >
                <img src="/images/pot.jpg" />
              </button>
            </Marker>
          );
        })}

        {selectedSite ? (
          <Popup
            latitude={selectedSite.latitude}
            longitude={selectedSite.longitude}
            onClose={() => setSelectedSite(null)}
          >
            <div>{selectedSite.Name}</div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default Main;
