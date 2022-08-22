import { Container } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Biography({bioInfo}) {

  
function createData(name, values) {
  if (name == "Date of death"){
    if(bioInfo.death_date_type?.name === null ||  bioInfo.death_date_type?.name === undefined ) {
      if(bioInfo.date_of_death === undefined || bioInfo.date_of_death === null) return 0;          
      else  {
        values = bioInfo.date_of_death;
        return {name, values};
      }
  }
  }
  if (name == "Date of birth"){  
      if(bioInfo.birth_date_type?.name === null ||  bioInfo.birth_date_type?.name === undefined ) {
        if(bioInfo.date_of_birth === undefined || bioInfo.date_of_birth === null) return 0;          
        else  {
          values = bioInfo.date_of_birth;
          return {name, values};
        }
    }
  }
  if (name == "Date of flourishing") {
    if(bioInfo.flourishing_date_type?.name === null ||  bioInfo.flourishing_date_type?.name === undefined ) {
      if(bioInfo.flourishing_date === undefined || bioInfo.flourishing_date === null) return 0;          
      else  {
        values = bioInfo.flourishing_date;
        return {name, values};
      }
  }
  }   

  return { name, values };
}

  const rows = [
    createData('First Name', bioInfo.first_name),
    createData('Last Name', bioInfo.last_name),
    createData('Aristocratic title', bioInfo.aristocratic_title),
    createData('Pseudonym', bioInfo.pseudonym),
    createData('Other names', bioInfo.other_names),
    createData('Name in religion', bioInfo.name_in_religion),
    createData('Gender', bioInfo.gender?.name),  
    createData('Husband name ', bioInfo.husbands_name),
    createData('Maiden name ', bioInfo.maiden_name),
    createData('Religious Title ', bioInfo.religious_title),
    createData('Date of birth', bioInfo.birth_date_type?.name + ' ' + bioInfo.date_of_birth),
    createData('Date of death', bioInfo.death_date_type?.name + ' ' + bioInfo.date_of_death),
    createData('Date of flourishing', bioInfo.flourishing_date_type?.name + ' ' + bioInfo.flourishing_date),
    createData('Religious Order', bioInfo.religious_order_id),
    createData('Self described identity ', bioInfo.self_described_identity),
    createData('Nationality', bioInfo.nationality),  
  ].filter(e => e.values != null);

  // const rows = [];
  // rows.push();

  return (
    <Container>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                <b>{row.name}</b>
              </TableCell>
              <TableCell align="right">{row.values}</TableCell></TableRow>
              
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
{/* 
    {bioInfo.pseudonym === null &&
    <div>Pseudonym : {bioInfo.pseudonym}</div> */}
    
        
    </Container>

  );
}
