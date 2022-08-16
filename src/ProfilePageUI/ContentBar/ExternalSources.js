import { Container } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ExternalSources({ sources }) {


  function createData(name, values) {
    return { name, values };
  }
  const rows = [
    createData('ODNB', sources[0]),
    createData('DIB', sources[1]),
    createData('TNOP', sources[2]),
    createData('Wikidata', sources[3]),
    createData('AINM', sources[4]),
    createData('SDFB', sources[5]),
  ].filter(e => e.values != null);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">External Sources</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
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
    </Container>
  );
}
