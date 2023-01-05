import React from 'react';
import './Panel.scss';
import About from '../tabs/About';
import PanelBottom from './PanelBottom';
import Filter from '../tabs/Filter';
import { useState } from 'react';
import PanelRight from './PanelRight';


function Panel({ siteTypes, sites, setFilteredSites, filteredSites, setMapStyle, setHistoricMap, setCountSites, hoverInfo, countSites }) {

    const [showFilter, setShowFilter] = useState(false);
    return (
        <>
            <div class="top-panel">
                MACMORRIS
            </div>
            {showFilter && <div class="mid">
                <Filter siteTypes={siteTypes} sites={sites} setFilteredSites={setFilteredSites}
                    filteredSites={filteredSites} setMapStyle={setMapStyle} setHistoricMap={setHistoricMap} 
                    setCountSites={setCountSites} />
            </div>}
            { Object.keys(hoverInfo).length != 0 && <PanelRight hoverInfo={hoverInfo.object} sites={sites} 
                    countSites={countSites} /> }
            <div class="bottom-panel">
                <PanelBottom showFilter={showFilter} setShowFilter={setShowFilter} />
            </div>
        </>

    );

}


export default Panel;

