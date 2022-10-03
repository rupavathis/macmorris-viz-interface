import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">MACMORRIS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#network">Network</Nav.Link>
            <Nav.Link href="#map">Map</Nav.Link>
            <Nav.Link href="#case-studies">Case studies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
    // <div className={classes.root}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Typography variant="h6" className={classes.title}>
    //         Home
    //       </Typography>
    //       <Typography variant="h6" className={classes.title}>
    //         Network
    //       </Typography>
    //       <Typography variant="h6" className={classes.title}>
    //         Map
    //       </Typography>
    //       <Typography variant="h6" className={classes.title}>
    //         Case studies
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    // </div>
