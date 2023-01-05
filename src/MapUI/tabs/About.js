import React from 'react';
import './tabs.scss';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
    library.add(fab)
    return (
        <div className="about">
            <div className="heading">
                About
            </div>
            {/* <div className='content'>
                OpenStreet
                <a rel="noopener nofollow" target="_blank">
                    <FontAwesomeIcon icon={["fab", "github"]} />

                    <span class="repo">Github</span>
                </a>
            </div> */}
            <div className="section maps">
                <div className="left">
                    <div>Maps used in this software are provided by</div>
                    <div>
                        <a
                            href="https://www.mapbox.com/about/maps/"
                            target="_blank"
                            title="Mapbox"
                            aria-label="Mapbox"
                            role="listitem"
                        >
                            © Mapbox
                        </a>
                        <div className="px-2">|</div>
                        <a
                            href="http://www.openstreetmap.org/about/"
                            target="_blank"
                            title="OpenStreetMap"
                            aria-label="OpenStreetMap"
                            role="listitem"
                        >
                            © OpenStreetMap
                        </a>
                        <div className="px-2">|</div>
                        <a
                            className="improve"
                            href="https://www.mapbox.com/map-feedback/"
                            target="_blank"
                            title="Improve this map"
                            aria-label="Improve this map"
                            role="listitem"
                        >
                            Improve this map
                        </a>
                    </div>
                </div>
                <div className="right">
                    <a
                        className="mapboxgl-ctrl-logo"
                        target="_blank"
                        rel="noopener nofollow"
                        href="https://www.mapbox.com/"
                        aria-label="Mapbox logo"
                    >
                        <span className="is-hidden">Mapbox Link</span>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default About;

