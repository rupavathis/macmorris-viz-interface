import * as React from "react";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Container from "@mui/material/Container";



export default function PeopleSearch() {

  const [genders, setGenders] = React.useState([]);
  const [rDesignations, setRDesignations] = React.useState([]);
  const [rOrders, setROrders] = React.useState([]);
  const [rSubTypes, setRSubTypes] =  React.useState([]);  
  const [roles, setRoles] = React.useState([]);
  const [roleAttribs, setRoleAttribs] = React.useState([]);

  const fetchData =  async () => {
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

    // const attribs = await fetch("/attribs");
    // const attribsJson = await attribs.json();
    // setRoleAttribs(attribsJson);

  };

  const onRoleChange = async(e, v) => {
    console.log(v.length)
    // if(v.length < 0) {
    //   console.log("inside length")
    //   setRoleAttribs([]);
    // }
    console.log(v.id);
    const attribsRes = await fetch(`/attribs/roles/${v.id}`);
    const attribsJson = await attribsRes.json();
    setRoleAttribs(attribsJson);
  }


  useEffect(() => {
    fetchData();
  },[]);


  return (
    <div>
      <Container>
        <Autocomplete
          filterSelectedOptions
          options={genders}
          id="auto-complete"
          autoComplete
          getOptionLabel={(option) => option.name || ""}
          includeInputInList
          renderInput={(params) => (
            <TextField {...params} label="Gender" variant="standard" />
          )}
        />

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
        />
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
        />
        <Autocomplete
          id="auto-complete"
          options={rOrders}
          getOptionLabel={(option) => option.name || ""}
          autoComplete
          includeInputInList
          renderInput={(params) => (
            <TextField {...params} label="Religious Order" variant="standard" />
          )}
        />
        <Autocomplete
          id="auto-complete"
          options={roles}
          getOptionLabel={(option) => option.name || ""}
          autoComplete
          includeInputInList
          renderInput={(params) => (
            <TextField {...params} label="Roles" variant="standard" />
          )}
          onChange={(event, value) => onRoleChange(event, value)}
        />
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
        />}

      </Container>
    </div>
  );
}
