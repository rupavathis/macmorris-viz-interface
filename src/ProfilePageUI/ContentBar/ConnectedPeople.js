import { Container } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';
import {
  Link
} from "react-router-dom";


export default function Connections({ connections }) {

  function createData(value1, value2, value3, value4, value5, value6) {
    return { value1, value2, value3, value4, value5, value6};
  }

  const rows = connections.map((conn) => createData(conn.id, conn.source_id?.id, conn.source_id?.name, conn.target_id?.id, conn.target_id?.name, conn.relationship_types.map((r) => r.name)));
  // const rows = rows_duplicates.filter((item, index) => rows_duplicates(item) === index);

  // const [linkClicked, setLinkClicked] = useState(false);
  // const clickLink = () => {
  //   setLinkClicked(true);
  // }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 150 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">
                <Link to={`/network`}>
                  View the networks
                </Link>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.value1}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">
                  <Link to={`/profile/${row.value2}`}>
                    {row.value3}
                  </Link></TableCell>
                <TableCell align='center'>{row.value6}</TableCell>
                <TableCell align="right">
                  <Link to={`/profile/${row.value4}`}>
                    {row.value5}
                  </Link></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
