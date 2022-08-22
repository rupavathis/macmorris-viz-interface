import './ContentBar.css'
import Info from '../InfoBar/Info.js'
import React, { useState } from 'react';
import { Graph } from "react-d3-graph";

function ContentBar() {
  const [toggleInfo, setToggleInfoBar] = useState(false);
  function setToggleInfo(e){
    console.log("Im inside")
    console.log(toggleInfo)   
    setToggleInfoBar(!toggleInfo);  
    console.log(toggleInfo) 
    return toggleInfo
  }

  // the graph configuration, just override the ones you need
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
    color: "lightgreen",
    size: 120,
    highlightStrokeColor: "blue",
  },
  link: {
    highlightColor: "lightblue",
  },
};

const onClickNode = function(nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onClickLink = function(source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

const data = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
  links: [
    { source: "Harry", target: "Sally" },
    { source: "Harry", target: "Alice" },
  ],
};

    return (
      <Graph
  id="graph-id" // id is mandatory
  data={data}
  config={myConfig}
  onClickNode={onClickNode}
  onClickLink={onClickLink}
/>      
    );
  }
  
  export default ContentBar;
  