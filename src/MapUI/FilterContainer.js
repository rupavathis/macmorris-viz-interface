import React from 'react';
import Form from 'react-bootstrap/Form';
import './FilterContainer.scss';
import pointer from './pointer.svg';
import clsx from 'clsx';
import { useState } from "react";


function FilterContainer({ siteTypes, sites, setFilteredSites, filteredSites }) {
    const [selectPointer, setSelectPointer] = useState([]);

    return (
        // <Form>
        //     {changeSites()}
        // </Form>
        <div className="filterContainer">
            {switchSites(filteredSites.length)}
        </div>
    );

    function switchSites(siteLength) {
        return (
            <div>
                Showing {siteLength} sites
                {siteTypes.map((site) => {
                    return (
                        <div className={clsx("siteTypeClick", {"active": site.id === 1})}
                        id={site.id} 
                        onClick={(event) => filterSiteType(event)}>
                        <svg className={`pointer pointer-${site.id}`}>
                            <use href={`${pointer}#mappointer`} xlinkHref={`${pointer}#mappointer`} />
                        </svg> {site.name}</div>)
                })}
            </div>
        )
    }

    function showCount(site){
        const count = sites.filter(s => s.site_type_id === site.id);
        return site.name + " - " + count.length ;
    }

    function filterSiteType(event){       
        const id = parseInt(event.target.id);
        setSelectPointer([selectPointer].concat(id))
        console.log("Sp", selectPointer)
        const sitesReq = sites.filter(s => s.site_type_id === id);
        setFilteredSites(sitesReq);


    }
    function changeSites() {
        return siteTypes.map((siteType) => {
            return (
                <Form.Check
                    type="switch"
                    id={siteType.id}
                    label={siteType.name}
                    onChange={(event) => {
                        const id = parseInt(event.target.id);
                        const sitesReq = sites.filter(s => s.site_type_id === id);
                        console.log("target", id, sitesReq);
                        setFilteredSites(sitesReq);

                    }}
                />)
        })
    }
}


export default FilterContainer;

