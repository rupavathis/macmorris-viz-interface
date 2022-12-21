import * as React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import ContentBar from '../ContentBar/ContentBar.js'



export default function PeopleSearch({ isNetworkSearch, isNetworkFilter }) {

  const [genders, setGenders] = useState([]);
  const [rDesignations, setRDesignations] = useState([]);
  const [rOrders, setROrders] = useState([]);
  const [rSubTypes, setRSubTypes] = useState([]);
  const [roles, setRoles] = useState([]);
  const [roleAttribs, setRoleAttribs] = useState([]);
  const [search, setSearch] = useState(false);
  const [peopleData, setPeopleData] = useState([]);
  const [selectedGender, setSelectedGender] = useState();
  const [selectedRDesignations, setsSelectedRDesignations] = useState([]);
  const [selectedROrder, setSelectedROrder] = useState();
  const [selectedAttribs, setSelectedAttribs] = useState([]);
  const [selectedRSubtype, setSelectedRSubtype] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);


  const handleSearch = async () => {
    setSearch(true);
    let url = 'search/people?';
    if (selectedGender != null) url += `gender=${selectedGender}`
    if (selectedRSubtype != null) url += `&rSubtype=${selectedRSubtype}`
    if (selectedROrder != null) url += `&rOrder=${selectedROrder}`
    if (selectedAttribs != null) url += `&attribs=${selectedAttribs}`

    console.log(url)
    const peopleRes = await fetch(url);
    const peopleJson = await peopleRes.json();
    setPeopleData(peopleJson);
    console.log("People data", peopleJson);
  };


  const fetchData = async () => {
    const res = await fetch("/genders");
    const resJson = await res.json();
    console.log("I'm in fetchGenders");
    setGenders(resJson);

    const rDesignation = await fetch("/religious_designations");
    const rDesignationJson = await rDesignation.json();
    setRDesignations(rDesignationJson);

    const rOrders = await fetch("/religious_orders");
    const rOrdersJson = await rOrders.json();
    setROrders(rOrdersJson);

    const rSubTypes = await fetch("/religious_subtypes");
    const rSubTypesJson = await rSubTypes.json();
    setRSubTypes(rSubTypesJson);

    const roles = await fetch("/roles");
    const rolesJson = await roles.json();
    setRoles(rolesJson);

    // if(isNetworkFilter){
    //   const attribsRes = await fetch(`/attribs/roles/${v.id}`);
    //   const attribsJson = await attribsRes.json();
    //   setRoleAttribs(attribsJson);
    // }
    // const attribs = await fetch("/attribs");
    // const attribsJson = await attribs.json();
    // setRoleAttribs(attribsJson);

  };

  const onRoleChange = async (e, v) => {
    console.log(v.length)
    // if(v.length < 0) {
    //   console.log("inside length")
    //   setRoleAttribs([]);
    // }
    console.log("id", e, v[0].id);
    const attribsRes = await fetch(`/attribs/roles/${v[0].id}`);
    console.log(attribsRes)
    const attribsJson = await attribsRes.json();
    setRoleAttribs(attribsJson);
  }


  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Container>
      <Container>
        {!isNetworkSearch && <Autocomplete
          filterSelectedOptions
          options={genders}
          id="auto-complete"
          autoComplete
          getOptionLabel={(option) => option.name || ""}
          includeInputInList
          renderInput={(params) => (
            <TextField {...params} label="Gender" variant="standard" />
          )}
          onChange={(event, value) => setSelectedGender(value.id)}
        />
        }

        {!isNetworkSearch &&
          <Autocomplete
            id="auto-complete"
            options={rDesignations}
            getOptionLabel={(option) => option.name || ""}
            autoComplete
            includeInputInList
            renderInput={(params) => (
              <TextField
                {...params}
                label="Religious designation"
                variant="standard"
              />
            )}
            onChange={(event, value) => setsSelectedRDesignations(value.id)}
          />
        }
        {!isNetworkSearch && !isNetworkFilter &&
          <Autocomplete
            id="auto-complete"
            multiple
            options={rSubTypes}
            getOptionLabel={(option) => option.name || ""}
            autoComplete
            includeInputInList
            renderInput={(params) => (
              <TextField
                {...params}
                label="Religious Subtype"
                variant="standard"
              />
            )}
            onChange={(event, value) => setSelectedRSubtype(value[0].id)}
          />
        }
        {!isNetworkFilter &&
          <Autocomplete
            id="auto-complete"
            options={rOrders}
            getOptionLabel={(option) => option.name || ""}
            autoComplete
            includeInputInList
            renderInput={(params) => (
              <TextField {...params} label="Religious Order" variant="standard" />
            )}
            onChange={(event, value) => setSelectedROrder(value.id)}
          />
        }
        {!isNetworkFilter &&
          <Autocomplete
            id="auto-complete"
            multiple
            options={roles}
            getOptionLabel={(option) => option.name || ""}
            autoComplete
            includeInputInList
            renderInput={(params) => (
              <TextField {...params} label="Roles" variant="standard" />
            )}
            onChange={(event, value) => onRoleChange(event, value)}
          />
        }

        {roleAttribs && <Autocomplete
          id="auto-complete"
          multiple
          options={roleAttribs}
          getOptionLabel={(option) => option.name || ""}
          autoComplete
          includeInputInList
          renderInput={(params) => (
            <TextField {...params} label="Attributes" variant="standard" />
          )}
          onChange={(event, value) => setSelectedAttribs(value[0].id)}
        />}
      </Container>
      {!isNetworkFilter && <Button variant="outlined" onClick={handleSearch}>Search</Button>}
      {search && <ContentBar data={peopleData} />}
      {isNetworkFilter && <Button variant="outlined" onClick={handleSearch}>Filter</Button>}
    </Container>
  );
}
