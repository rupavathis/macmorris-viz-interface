import * as React from 'react';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const STYLE = {
  fillOpacity: 0.2,
  pin1: {
    cursor: 'pointer',
    fill: '#8c009d',
    stroke: 'black',
    fillOpacity: 0.4
  },
  pin2: {
    cursor: 'pointer',
    fill: '#cad200',
    stroke: 'black',
    fillOpacity: 0.4
  },
  pin3: {
    cursor: 'pointer',
    fill: '#007ab1',
    stroke: 'black',
    fillOpacity: 0.4
  },
  pin4: {
    cursor: 'pointer',
    fill: '#3b6fff',
    stroke: 'black',
    fillOpacity: 0.4
  },
  pin5: {
    cursor: 'pointer',
    fill: '#d00',
    stroke: 'black',
    fillOpacity: 0.4
  },
  pin6: {
    cursor: 'pointer',
    fill: '#ee7d00',
    stroke: 'black',
    fillOpacity: 0.4
  },
  pin7: {
    cursor: 'pointer',
    fill: '#00b14d',
    stroke: 'black',
    fillOpacity: 0.4
  }
};


function Pin({pinStyle}) {
  let pin = "pin"+pinStyle;
  
  return (
    <svg height={20} viewBox="0 0 24 24" style={STYLE[pin]}>
      <path d={ICON} />
    </svg>
  );
}

// export default React.memo(Pin);
export default Pin;
