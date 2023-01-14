import "./App.css";
// import "./NetworkUI/InfoBar/Info.css";
import NetworkUI from './NetworkUI/index'
import MapUI from './MapUI/home'
import SearchUI from "./SearchUI/home";
import ProfileUI from './ProfilePageUI/home'
import WorksUI from './WorksUI/home'
import React from "react";
import Home from './Home';
import SiteUI from './SitesUI/sites';
/// app.js
// import 'mapbox-gl/dist/mapbox-gl.css';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/search/*" element={<SearchUI/>} />
          <Route path="/profile/*" element={<ProfileUI/>} />
          <Route path="/works/*" element={<WorksUI/>} />
          <Route path="/network" element={<NetworkUI/>} />
          <Route path="/map" element={<MapUI/>} />
          <Route path="/site/*" element={<SiteUI/>} />
         
        </Routes>
    </div>
  );
}

export default App;
