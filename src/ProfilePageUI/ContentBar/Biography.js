import { Container } from '@mui/material';
import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, values) {
  return { name, values };
}

export default function Biography({bioInfo}) {
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
    createData('Date of birth', bioInfo.date_of_birth),
    createData('Date of death', bioInfo.death_date_type?.name + ' ' + bioInfo.date_of_death),
    createData('Date of flourishing', bioInfo.flourishing_date),
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
                {row.name}
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
