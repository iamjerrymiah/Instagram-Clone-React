import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const navbar = ( props ) =>{
    return(
        <Navbar expand="lg" style={{borderBottom: '2px solid #ccc', marginBottom: '20px', background: 'white'}}>
      <Container fluid>
        <Navbar.Brand 
        href="/"
        style={{ marginLeft: '75px', marginRight: '200px'}}>Instagram Clone</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

        <Form className="d-flex" style={{marginRight: '50px'}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/"><span className='fa fa-home fa-2x'></span></Nav.Link>
            <Nav.Link onClick={props.clicked}><span className='fa fa-commenting-o fa-2x'></span></Nav.Link>
            <Nav.Link onClick={props.clicked}><span className='fa fa-send-o fa-2x'></span></Nav.Link>
            <Nav.Link href="/explore"><span className='fa fa-compass fa-2x'></span></Nav.Link>
            <Nav.Link onClick={props.clicked}><span className='fa fa-heart-o fa-2x'></span></Nav.Link>
            <Nav.Link href="/profile"><span className='fa fa-user fa-2x'></span></Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default navbar;