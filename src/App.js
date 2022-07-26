import './App.css';
import './NetworkUI/InfoBar/Info.css'
// import Network from './NetworkUI/home'
// import MapUI from './MapUI/home'
import SearchUI from './SearchUI/home'
// import ProfileUI from './ProfilePageUI/home'
import React from 'react';

function App() {

  // const [pageId, setPageId] = useState(0);
  

  return (
    <div className="App">
        {/* <button id = '1' onClick={getPageId}> Map </button>      */}
        {<SearchUI />}
        
    </div>
  );
}

export default App;
