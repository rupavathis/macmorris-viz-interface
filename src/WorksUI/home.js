import React, { useEffect, useState } from "react";
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

    const [workID, setWorkId] = useState(-1);
    const [works, setWorks] = useState({});


    useEffect(() => {
        console.log("In works page")

        if (document.URL.includes('/works')) {
            const url = document.URL;
            const id = url.substring(url.lastIndexOf('/') + 1);
            console.log(id, id);
            setWorkId(id);
        }
    }, [])


    useEffect(() => {
        (async () => {
            console.log("hello");
            if (workID != -1) {
                console.log("hi");
                const workRes = await fetch(`/works/${workID}`);
                const workResJson = await workRes.json();
                console.log(workResJson);
                setWorks(workResJson);

            }

        })();
    }, [workID])


    function createData(name, value){
        return { name, value}
    }

    const rows = [
        createData('Brief Title', works.display_title),
        createData('Language', works.language?.name),
        createData('Work Classification', works.work_classification?.reduce((deletedData, name) => deletedData.concat(`${name.name}`+ '  '), '')),
        createData('Title', works.title),
        createData('Author', works.author_id?.display_name),
        createData('Patron', works.patron_id?.reduce((deletedData, name) => deletedData.concat(`${name.display_name}`+ '  '), '')),
        createData('Printer', works.printer_id?.reduce((deletedData, name) => deletedData.concat(`${name.display_name}`+ '  '), '')),
        createData('Publisher', works.publisher_id?.reduce((deletedData, name) => deletedData.concat(`${name.display_name}`+ '  '), '')),
        createData('Bookseller', works.bookseller_id?.reduce((deletedData, name) => deletedData.concat(`${name.display_name}`+ '  '), '')),
        createData('Date', works.work_date),
        createData('Link URL', works.link_uri)

        // id, display_title, title, author, patron, publisher, bookseller, printer, url, language, date, workClassification };
    ].filter((e) => e.values !== null)

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
                                    <TableCell align="right">{row.value}</TableCell>
                               
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
