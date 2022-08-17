import { Container } from '@mui/material';
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';
import Home from '../../Home';
import {
  Link,
  Routes,
  Route,
} from "react-router-dom";


export default function Connections({ connections }) {

  function createData(value1, value2, value3) {
    return { value1, value2, value3 };
  }

  const rows = connections.map((conn) => createData(conn.id, conn.name, conn.rel_type));
  // const rows = rows_duplicates.filter((item, index) => rows_duplicates(item) === index);

  const [linkClicked, setLinkClicked] = useState(false);
  const clickLink = () => {
    setLinkClicked(true);
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right"></TableCell>
              <TableCell align="right">
                <Link to={`/network`}>
                  Show the networks
                </Link>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.values}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">
                  <Link to={`/profile/${row.value1}`}>
                    {row.value2}
                  </Link></TableCell>
                <TableCell align='right'>{row.value3}</TableCell></TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
