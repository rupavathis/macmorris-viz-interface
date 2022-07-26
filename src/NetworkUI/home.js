import React, { useState } from 'react';
import './home.css'
import Side from './SideBar/SidePanel'
import Content from './ContentBar/ContentBar'
import Legend from './InfoBar/Legend'

import clsx from 'clsx';


function Network() {

  const [toggleMenu, setToggleMenuBar] = useState(true);
 
  function toggleMenuBar(e) {
    console.log("Im inside")
    console.log(toggleMenu)   
    setToggleMenuBar(!toggleMenu);  
    console.log(toggleMenu)     
  }


  return (
    <div className="Home"> 
        
        <div className={clsx("SidePanel", { "expanded": toggleMenu })}>  <Side toggleMenuBar={toggleMenuBar}/> </div>
        <div className="ContentBar"> <Content /> </div>
        <div> <Legend /> </div>
        
    </div>
  );
}

export default Network;
