import React, {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from '../SearchUI/Header/Header.js'



function Works() {

    const[works, setWorks] = useState([]);

    useEffect(() => {(async() =>{
        console.log("hi");
        const workRes = await fetch("/people/150/works");
        const workResJson = await workRes.json();
        console.log(workResJson);
        setWorks(workResJson[0]);
    })();}, [])


    function createData(name, calories) {
        return { name, calories };
    }

    const rows = [
        createData('Title', works.display_title),
        createData('Language', works.language_id)
       
    ];

    return (
        <div>
            <Header />
            <Container>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            {/* <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                            </TableRow> */}
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
                                    <TableCell align="right">{row.calories}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

        </div>


    );
}

export default Works;
