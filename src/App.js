import "./App.css";
import "./NetworkUI/InfoBar/Info.css";
import NetworkUI from './NetworkUI/home'
// import MapUI from './MapUI/home'
import SearchUI from "./SearchUI/home";
import ProfileUI from './ProfilePageUI/home'
import WorksUI from './WorksUI/home'
import React from "react";
import Home from './Home';
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
          {/* <Route path="/network" element={<NetworkUI/>} /> */}
          {/* <Route path="/map" element={<MapUI/>} /> */}
         
        </Routes>
    </div>
  );
}

export default App;
