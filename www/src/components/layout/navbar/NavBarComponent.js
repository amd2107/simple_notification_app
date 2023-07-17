import './NavBarComponent.css';
import logo from '../../../logo.svg';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


function NavBarComponent() {
    return (
        <Navbar bg="light" expand="lg" className={"mb-3"}>
            <LinkContainer to="/">
                <Navbar.Brand>
                    <img src={logo} className="logo" alt="logo" width={100} />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Send Notification</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/other">
                        <Nav.Link>Logs</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBarComponent;