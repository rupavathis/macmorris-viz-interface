import React from 'react';
import Form from 'react-bootstrap/Form';
import './Filter.scss';
import pointer from '../../assets/pointer.svg';
import clsx from 'clsx';
import { useState } from "react";
import mapStyle from '../../assets/mapStyles.png';


// const darkStyle = 'mapbox://styles/mapbox/dark-v11';
const darkStyle = 'mapbox://styles/mapbox/dark-v11';
const terrainStyle = 'mapbox://styles/rupavathi/clc169gkn000816p6bdrhgdbq';
const satelliteStyle = 'mapbox://styles/mapbox/satellite-v9';

function Filter({ siteTypes, sites, setFilteredSites, filteredSites, setMapStyle, setHistoricMap, setCountSites }) {
    const [selectPointer, setSelectPointer] = useState([]);
    const [showSiteType, setShowSiteType] = useState(false);
    const [isMapStyleOn, setIsMapStyleOn] = useState(false);
    const [isHistoricMapOn, setIsHistoricMapOn] = useState(false);
    const [selectedSiteType, setSelectedSiteType] = useState([]);

    let addRemoveSelectedPointer = [];

    return (
        <div class="filter-wrapper">
            <div class="filter-container">
                {switchSites(filteredSites.length)}
                <hr />
                <Form>
                    {changeMapStyle()}
                    <hr />
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
                        <div className={clsx("siteTypeClick", { "active": selectPointer.includes(site.id) })}
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
                label="Terrain Map style"
                onChange={() => {
                    setIsMapStyleOn(!isMapStyleOn);
                    !isMapStyleOn && setMapStyle(terrainStyle)
                    isMapStyleOn && setMapStyle(darkStyle)
                }}
            />)
    }

    function selectHistoricMap() {
        return (
            <div>Historic Maps
                {["Map of Munster", "Map of Ulster", "Map of xxx"].map((m) => {
                    return (<Form.Check
                        type="switch"
                        id="historic-map"
                        label={m}
                        onChange={() => {
                            setIsHistoricMapOn(!isHistoricMapOn)
                            !isHistoricMapOn && setHistoricMap("munster")
                            isHistoricMapOn && setHistoricMap("")
                            console.log(isHistoricMapOn)
                        }}
                    />)
                })}
            </div>
        )
    }

    function showCount(site) {
        const count = sites.filter(s => s.site_type_id === site.id);
        return site.name + " - " + count.length;
    }

    function filterSiteType(event) {
        const id = parseInt(event.target.id);
        if (!selectPointer.includes(id)) {
            addRemoveSelectedPointer = [...selectPointer, id]
            setSelectPointer(addRemoveSelectedPointer)
        }
        else {
            addRemoveSelectedPointer = selectPointer.filter((s) => s !== id)
            setSelectPointer(addRemoveSelectedPointer)
        }
        console.log(selectPointer)
        const sitesReq = addRemoveSelectedPointer.map((sp) => {
            console.log(sp);
            return sites.filter(s => s.site_type_id === sp)
        })
        const flattenedSitesReq = sitesReq.reduce((a, c) => a.concat(c), [])
        setFilteredSites(flattenedSitesReq);
        const countSites = flattenedSitesReq.reduce((a, c) => {
            const count = a[c.place_id] ?? 0;
            return { ...a, [c.place_id]: count + 1 }
        }, {})
        console.log(countSites)
        setCountSites(countSites)
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


export default Filter;

