import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import About from '../tabs/About';
import MapStyle from '../tabs/MapStyle';
import { useState } from 'react';
import './Panel.scss';
import Filter from '../tabs/Filter';

function PanelBottom({ showFilter, setShowFilter }) {
    const [showAbout, setShowAbout] = useState(false);
    const [showMapStyle, setShowMapStyle] = useState(false);

    return (
        <>
            <div class='icon-wrapper' onClick={() => setShowAbout(!showAbout)}>
                {showAbout && <About />}
                <FontAwesomeIcon icon={faCircleQuestion} />

            </div>
            <div class='icon-wrapper' onClick={() => setShowFilter(!showFilter)} >
                <FontAwesomeIcon icon={faLayerGroup} />
            </div>
            <div class='icon-wrapper-2' onClick={() => setShowMapStyle(!showMapStyle)}>
                <FontAwesomeIcon icon={faMap} />
            </div>
            {showMapStyle && <div class="map-style-wrapper">
                <MapStyle />
            </div>
            }
        </>
    )
}
export default PanelBottom;

