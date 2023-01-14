import { useEffect, useState, useRef, useCallback } from "react";
import { Graph } from "react-d3-graph";

// graph payload (with minimalist structure)
const data = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }, {id: "2"}],
  links: [
    { source: "Harry", target: "Sally" },
    { source: "Harry", target: "Alice" },
  ],
};



const onClickNode = function(nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onClickLink = function(source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

const WorkNetwork = () => {
  // const [render, setRender] = useState(true);
  const [render, setRender] = useState(false);
  const[graphHeight, setgraphHeight] = useState(500);
  const[graphWidth, setgraphWidth] = useState(800);
  let graph = useRef(null);

  // useEffect(() => {
  //   setTimeout(
  //     () => {
  //       setRender(true);
  //       console.log('render set to true');
  //     }, 5000
  //   )
  // }, []);

    
  useEffect(() => {
    console.log(graph.current.offsetWidth, graph.current.offsetHeight)

    setgraphWidth(graph.current.offsetWidth+250);
    setgraphHeight(graph.current.offsetHeight-40);
}, []);

// const elRef = useCallback(graph => {
//   console.log("ref", graph);
//   if (graph !== null) {
//       console.log("ref", graph); // node = elRef.current
//   }
// }, []);

// the graph configuration, just override the ones you need
const myConfig = {
  height: graphHeight,
  width: graphWidth,
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
  return (
    <div className='graph-ui' ref={graph}>
    {/* {render && */}
      <Graph
      id="graph-id2" // id is mandatory
      data={data}
      config={myConfig}
      onClickNode={onClickNode}
      onClickLink={onClickLink}
      />
    {/* } */}
    </div>
  )
};

export default WorkNetwork;
