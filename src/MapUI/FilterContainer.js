import React from 'react';
import Form from 'react-bootstrap/Form';
import './FilterContainer.scss';

function FilterContainer({ siteTypes, sites, setFilteredSites }) {
    return (
        <Form>
            {changeSites()}

        </Form>
    );

    function changeSites() {
        return siteTypes.map((siteType) => {
            console.log(siteType.id);
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

