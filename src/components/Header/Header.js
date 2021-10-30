import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/logo3.png';
import useAuth from '../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
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
                        {user?.email ? <Button className="btn-logout" onClick={logOut} variant="dark">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {user?.email && <img className="display-img" src={user.photoURL} alt="" />}
                        <Navbar.Text>
                            <Link className="naming" to="/account">{user?.displayName}</Link>
                        </Navbar.Text>
                        {user?.email && <NavDropdown className="ms-3" title="Manage Orders" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/cart">My Orders</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/allOrders">All Orders</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/admin">Add New Service</NavDropdown.Item>
                        </NavDropdown>}
                        {/* {user?.email && <Link className="login-options" to="/cart">My orders</Link>}
                        {user?.email && <Link className="login-options" to="/allOrders">All orders</Link>}
                        {user?.email && <Link className="login-options" to="/admin">Update Service</Link>} */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;