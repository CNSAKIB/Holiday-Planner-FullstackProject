import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/logo3.png';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="100"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className="fw-bold fs-2 ms-3" ><span className="holiday" >Holiday-</span><span className="planner" >Planner</span></span><br />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end w-75 mx-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#moments">Moments</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Navbar.Text>
                            <a className="ms-2" href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;