import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar2() {
    return (
        <Navbar expand="lg" variant="dark" bg='black'  data-bs-theme="light" className="rounded mb-4">
            <Container>
                <Navbar.Brand as={Link} to={"/"}>Mr. Ram </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to={"/about"}>About</Nav.Link>
                        <Nav.Link as={NavLink} to={"/services"}>Services</Nav.Link>
                        <Nav.Link as={NavLink} to={"/projects"}>Projects</Nav.Link>
                        <Nav.Link as={NavLink} to={"/blog"}>Blog</Nav.Link>
                        <Nav.Link as={NavLink} to={"/contact"}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
