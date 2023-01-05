import React from 'react';
import Filter from '../tabs/Filter';
import About from '../tabs/About';

function Panel() {
    return (
        <div class="panel-left">
            <div class="top">
              {/* <Filter /> */}
            </div>
            <div class="bottom">
                <About />
            </div>
        </div>

    );

}


export default Panel;

