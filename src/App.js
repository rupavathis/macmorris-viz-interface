import "./App.css";
import "./NetworkUI/InfoBar/Info.css";
// import Network from './NetworkUI/home'
// import MapUI from './MapUI/home'
// import SearchUI from "./SearchUI/home";
import ProfileUI from './ProfilePageUI/home'
import React from "react";

function App() {
  // const [pageId, setPageId] = useState(0);

  return (
    <div className="App">
      <form action="../../post" method="post" className="form">
        <button type="submit">Connected?</button>
      </form>
      {<ProfileUI />}
    </div>
  );
}

export default App;
