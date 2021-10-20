import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  // user data recive
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar bg="light" fixed="top" variant="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt="nav_Logo"
              src="https://i.ibb.co/MfJmmj7/nav.png"
              width="170"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link as={Link} active to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} active to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} active to="/about">
                About Us
              </Nav.Link>
              {user.email ? (
                <Nav.Link>
                  <button onClick={logOut} className="btn btn-sm btn-success">
                    <i className="fas fa-user"></i> Log Out
                  </button>
                  <span>{user.email.slice(0, 10)}</span>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} active to="/login">
                  <button className="btn btn-sm btn-outline-danger">
                    <i className="fas fa-sign-in-alt"></i> Login
                  </button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
