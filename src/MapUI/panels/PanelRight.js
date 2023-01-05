import React from 'react';
import Filter from '../tabs/Filter';
import About from '../tabs/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import TabInfo from '../tabs/Tab';

function Panel({hoverInfo, sites, countSites}) {
    const [expanded, setExpanded] = React.useState(true);
    return (
        <div className={clsx("panel-right", { "active": {expanded} })}>
            <div class="right-container">
                Hello
                <TabInfo info={hoverInfo} sites={sites} 
                    countSites={countSites} />
                
                <div
                    onClick={() => setExpanded(!expanded)}
                    className={clsx("minimize-button", { "active": {expanded} })}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>

        </div>

    );

}


export default Panel;

