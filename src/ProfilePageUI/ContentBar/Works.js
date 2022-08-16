import { Container } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Works({ works }) {

  // const worksParams = works;

  function createData(value1, value2) {
    return { value1, value2 };
  }

  const rows = works.map((w) => createData(w.work_date, w.display_title));


  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table" size="small">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.values}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >

                <TableCell component="th" scope="row">
                  {row.value2}
                </TableCell>
                <TableCell align="right">
                  {row.value1}</TableCell></TableRow>


            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
