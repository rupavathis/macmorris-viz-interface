import { Container } from '@mui/material';
import React, {useState} from 'react';
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

  function createData(value1, value2) {
    return { value1, value2 };
  }

  const rows = connections.map((conn) => createData(conn.id, conn.display_name));
  // const rows = rows_duplicates.filter((item, index) => rows_duplicates(item) === index);

  const [linkClicked, setLinkClicked] = useState(false);
  const clickLink = () =>{
    setLinkClicked(true);
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} size="small" aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.values}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">
                  <Link to={`/profile/${row.value1}`}>
                    {row.value2} {row.value1}
                  </Link></TableCell></TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
