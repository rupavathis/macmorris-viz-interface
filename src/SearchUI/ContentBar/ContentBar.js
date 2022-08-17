import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Container from '@mui/material/Container';
import {
  Link,
  Routes,
  Route,
} from "react-router-dom";
import ProfileUI from '../../ProfilePageUI/home'


const columns = [
  { id: 'name', label: 'Name', minWidth: 200 },
  { id: 'dob', label: 'Date of Birth', minWidth: 100 },
  {
    id: 'dod',
    label: 'Date of Death',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'dof',
    label: 'Date of Flourishing',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'gender',
    label: 'Gender',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'roles',
    label: 'Roles',
    minWidth: 180,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, dob, dof, dod, gender, roles) { 
  return { name, dob, dof, dod, gender, roles };
}



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function ContentBar({data}) {
  console.log("Search contentbar", data);
 
  const rows = [
    createData(data.display_name, data.date_of_birth, data.date_of_flourishing, data.date_of_death, data.gender?.name, data.attribs?.reduce((deletedData, name) => deletedData.concat(`${name.name}`+ ' , '), '')),
   
  ];
 
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container>
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                            <Link to={`/profile/${data.id}`}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                      </Link></TableCell>
                      
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>       
    </Container>
  );
}
