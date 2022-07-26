import './ContentBar.css'
import Info from '../InfoBar/Info.js'
import React, { useState } from 'react';


function ContentBar() {
  const [toggleInfo, setToggleInfoBar] = useState(false);
  function setToggleInfo(e){
    console.log("Im inside")
    console.log(toggleInfo)   
    setToggleInfoBar(!toggleInfo);  
    console.log(toggleInfo) 
    return toggleInfo
  }

    return (
      <div className='ContentBar'>
        <button onClick={setToggleInfo}>  Person 1 </button>
        {toggleInfo &&  <Info />}
     
      </div>      
    );
  }
  
  export default ContentBar;
  