import { Container } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';


export default function ExternalSources({ sources }) {


  function createData(name, values) {
    return { name, values };
  }
  const rows = [
    createData('ODNB', "https://doi.org/10.1093/ref:odnb/"+sources[0]),
    createData('DIB', "https://doi.org/10.3318/dib."+sources[1]+".v1"),
    createData('TNOP', sources[2]),
    createData('Wikidata', "https://www.wikidata.org/wiki/"+sources[3]),
    createData('AINM', "https://www.ainm.ie/Bio.aspx?ID="+sources[4]),
    createData('SDFB', "http://sixdegreesoffrancisbacon.com/?ids="+sources[5]),
  ].filter(e => e.values != null);

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
                <TableCell align="right">
                  <Link href= {row.values}>{row.values}</Link></TableCell></TableRow>

            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
