import { Container } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Badge from 'react-bootstrap/Badge';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function Roles({ roles }) {

  function createData(values) {
    return { values };
  }

  const rows = roles.map((role) => createData(role));

  return (
    <Container>
      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"><b>Roles</b></TableCell>
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
      </TableContainer> */}

      {/* {roles.map((role) =><span><Badge bg="secondary">{role}</Badge>{' '}</span>)} */}
      <Stack direction="row" spacing={1} justifyContent={"center"}>
        {roles.map((role) =>
          <Chip label={role} />
        )}
      </Stack>
    </Container>
  );
}
