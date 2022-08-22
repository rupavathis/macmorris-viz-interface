import { Container } from '@mui/material';
import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";
import './Work.css';

export default function Works({ works }) {

  function createData(value1, value2, value3) {
    return { value1, value2, value3 };
  }

  const rows = works.map((w) => createData(w.id, w.work_date, w.display_title));


  return (
    <Container>
     
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table" size="small">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.value1}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >

                <TableCell component="th" scope="row">
                <Link to={`/works/${row.value1}`}>
                    {row.value3}
                  </Link>
                </TableCell>
                <TableCell align="right">
                  {row.value2}</TableCell></TableRow>


            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {works.length == 0 && <div className='NoWorkLabel'>No works to show</div>}
    </Container>
  );
}
