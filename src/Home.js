import "./App.css";
import "./NetworkUI/InfoBar/Info.css";
import React from "react";
import {
  Link
} from "react-router-dom";

function Home() {

  return (
    <div className="Home">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search UI</Link>
            </li>
            {/* <li>
              <Link to="/profile/150">Profile UI</Link>
            </li> */}
            <li>
              <Link to="/works">Works UI</Link>
            </li>
            <li>
              <Link to="/network">Network UI</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default Home;
