import React from 'react';
import Form from 'react-bootstrap/Form';
import './FilterContainer.scss';
import pointer from './pointer.svg';
import clsx from 'clsx';
import { useState } from "react";

const darkStyle = 'mapbox://styles/mapbox/dark-v11'
const terrainStyle = 'mapbox://styles/rupavathi/clc169gkn000816p6bdrhgdbq'



function FilterContainer({ siteTypes, sites, setFilteredSites, filteredSites, setMapStyle, setHistoricMap }) {
    const [selectPointer, setSelectPointer] = useState([]);
    const [showSiteType, setShowSiteType] = useState(false);
    const [isMapStyleOn, setIsMapStyleOn] = useState(false);
    const [isHistoricMapOn, setIsHistoricMapOn] = useState(false);
    const [selectedSiteType, setSelectedSiteType] = useState([]);

    let addRemoveSelectedPointer = []

    return (
        <div>
            <Form>
                {changeMapStyle()}
            </Form>
            <div className="filterContainer">
                {switchSites(filteredSites.length)}
                <Form>
                    {selectHistoricMap()}
                </Form>
            </div>

        </div>
    );

    function switchSites(siteLength) {
        return (
            <div>
                Showing {siteLength} sites
                {siteTypes.map((site) => {
                    return (
                        <div className={clsx("siteTypeClick", { "active":  selectPointer.includes(site.id) })}
                            id={site.id}
                            onClick={(event) => { setShowSiteType(true); return filterSiteType(event) }}>
                            <svg className={`pointer pointer-${site.id}`}>
                                <use href={`${pointer}#mappointer`} xlinkHref={`${pointer}#mappointer`} />
                            </svg> {site.name}</div>)
                })}
            </div>
        )
    }

    function changeMapStyle() {
        return (
            <Form.Check
                type="switch"
                id="terrain-map"
                label="Terrain Map"
                onChange={() => {
                    setIsMapStyleOn(!isMapStyleOn);
                    !isMapStyleOn && setMapStyle(terrainStyle)
                    isMapStyleOn && setMapStyle(darkStyle)
                }}
            />)
    }

    function selectHistoricMap() {
        return (
            <Form.Check
                type="switch"
                id="historic-map"
                label="Munster Map"
                onChange={() => {
                    setIsHistoricMapOn(!isHistoricMapOn)
                    !isHistoricMapOn && setHistoricMap("munster")
                    isHistoricMapOn && setHistoricMap("")
                    console.log(isHistoricMapOn)
                }}
            />)
    }

    function showCount(site) {
        const count = sites.filter(s => s.site_type_id === site.id);
        return site.name + " - " + count.length;
    }

    function filterSiteType(event) {
        const id = parseInt(event.target.id);
        if(!selectPointer.includes(id)){
            addRemoveSelectedPointer = [...selectPointer, id]
            setSelectPointer(addRemoveSelectedPointer)
        }          
        else {
            addRemoveSelectedPointer = selectPointer.filter((s) => s !== id)
            setSelectPointer(addRemoveSelectedPointer)
        }
        console.log(selectPointer)
        const sitesReq = addRemoveSelectedPointer.map((sp) => {console.log(sp); 
            return sites.filter(s => s.site_type_id === sp)})
        const flattenedSitesReq = sitesReq.reduce((a,c) => a.concat(c),[] )
        setFilteredSites(flattenedSitesReq);


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

