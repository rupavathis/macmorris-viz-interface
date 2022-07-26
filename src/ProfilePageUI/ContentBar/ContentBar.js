import React from 'react';
import Biography from './Biography.js';
import './ContentBar.css';
import TopInfo from './TopInfoBar'

function ContentBar() {

  return (

      <div className='ContentBar'>
         <div className='FirstBar'>
            <div className='Biography'><Biography /></div>
              <div className='InfoBar'>
                <div className='TopInfo'><TopInfo /></div>
                <div className='Roles'>Roles</div>

         </div>
         </div>
         <div className='SecondBar'>
        <div className='Works'>Works</div>
        <div className='ConnectedPeople'>Connected People</div>
        <div className='Sources'>External Sources</div>
      </div>
      
      
    </div> 
     
  );
}

export default ContentBar;
