import React from 'react';
import { useEffect, useState } from "react";
import '../Network.scss';
import Search from '../tabs/search';
import Filter from '../tabs/filter';
import Setting from '../tabs/settings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

function PanelLeft() {
    library.add(fas)
    const [tab, setTab] = useState("")

    return (
        <div className='panel-left'>
            {/* Panel-left*/}

            <div className='icons-wrapper'>
                {/* Panel - left */}
                <div className='icon-items' onClick={() => setTab("search")}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className='icon-items' onClick={() => setTab("filter")}>
                    <FontAwesomeIcon icon={["fas", "filter"]} />
                </div>
                <div className='icon-items' onClick={() => setTab("settings")}>
                    <FontAwesomeIcon icon={["fas", "gear"]} />
                </div>
            </div>
            {tab === "search" && <Search />}
            {tab === "filter" && <Filter />}
            {tab === "settings" && <Setting />}
        </div>
    )
}

export default PanelLeft;
