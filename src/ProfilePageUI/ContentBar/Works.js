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

  const worksParams = works;

  function createData( values) {
    console.log( values, "\n");
    return { values };
  }
  const rows = [
    // createData((works.map((w) => {console.log(w.display_title); return w.display_title}))),
    // createData((works[0])),
    // createData((works[1])),
    // createData((works[2])),
    // createData((works.map((w) =>  w.display_title), (works.map((w) =>  w.link_uri)))),
  ]

  return (
    <Container>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 150 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Works</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.values}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >

            <TableCell align="center">{row.values}</TableCell></TableRow>

        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Container>
  );
}
