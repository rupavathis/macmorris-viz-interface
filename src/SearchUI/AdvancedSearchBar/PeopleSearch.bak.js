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



  const fetchGender = async () => {
    const gendersRes = await fetch("/genders");
    const gendersJson = await gendersRes.json();
    console.log("I'm in fetchGender");
    return gendersJson;
  };

  const fetchRDesignation = async () => {
    const rDesignations = await fetch("/religious_designations");
    const rDesignationsJson = await rDesignations.json();
    return rDesignationsJson;
  };

  const fetchROrders = async () => {
    const rOrders = await fetch("/religious_orders");
    const rOrdersJson = await rOrders.json();
    return rOrdersJson;
  };

  const fetchRSubTypes = async () => {
    const rSubTypes = await fetch("/religious_subtypes");
    const rSubTypesJson = await rSubTypes.json();
    return rSubTypesJson;
  };

  const fetchRoles = async () => {
    const roles = await fetch("/roles");
    const rolesJson = await roles.json();
    return rolesJson;
  };

  const fetchRoleAttribs = async () => {
    const attribs = await fetch("/attribs");
    const attribsJson = await attribs.json();
    return attribsJson;
  };

  async function initialSet() {
    const genders = await fetchGender();
    setGender(genders);
    const rDesignations = await fetchRDesignation();
    setRDesignations(rDesignations);
    const rOrders = await fetchROrders();
    setROrders(rOrders);
    const rSubTypes = await fetchRSubTypes();
    setRSubTypes(rSubTypes);
    const roles = await fetchRoles();
    setRoles(roles);
    const roleAttribs = await fetchRoleAttribs();
    setRoleAttribs(roleAttribs);
  }

  useEffect(() => {
    initialSet();
  });

  
  const [selectedRDesignation, setSelectedRDesignation] = React.useState(
    rDesignation[0]
  );

  return (
    <div>
      <Container>
        <Autocomplete
          multiple
          filterSelectedOptions
          options={genders}
          id="auto-complete"
          autoComplete
          getOptionLabel={(option) => option.name || ""}
          includeInputInList
          // onChange={(event, value) => {console.log(gender);fetchGender(event, value)}}
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
          onChange={(event, selectedRDesignation) => {
            setSelectedRDesignation(selectedRDesignation);
          }}
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
          options={rSubTypes}
          getOptionLabel={(option) => option.name || ""}
          autoComplete
          value={selectedRDesignation}
          includeInputInList
          onChange={(event, selectedRDesignation) => {
            setSelectedRDesignation(selectedRDesignation);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Religious Subtype"
              variant="standard"
            />
          )}
        />
        <Autocomplete
          {...rOrder}
          id="auto-complete"
          options={rOrders}
          getOptionLabel={(option) => option.name || ""}
          autoComplete
          value={selectedRDesignation}
          includeInputInList
          onChange={(event, selectedRDesignation) => {
            setSelectedRDesignation(selectedRDesignation);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Religious Order" variant="standard" />
          )}
        />
        <Autocomplete
          id="auto-complete"
          options={roles}
          getOptionLabel={(option) => option.name || ""}
          autoComplete
          value={selectedRDesignation}
          includeInputInList
          onChange={(event, selectedRDesignation) => {
            setSelectedRDesignation(selectedRDesignation);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Roles" variant="standard" />
          )}
        />
        <Autocomplete
          id="auto-complete"options={roleAttribs}
          getOptionLabel={(option) => option.name || ""}
          autoComplete
          value={selectedRDesignation}
          includeInputInList
          onChange={(event, selectedRDesignation) => {
            setSelectedRDesignation(selectedRDesignation);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Attributes" variant="standard" />
          )}
        />
      </Container>
    </div>
  );
}
