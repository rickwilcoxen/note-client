import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link as={Link} to="/">Home</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#UserNotes">Create Notes</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link as={Link} to="/">Home</Nav.Link>
    <Nav.Link as={Link} to="/About">About</Nav.Link>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

// const alwaysOptions = (
//   <Fragment>
//     <Nav.Link to="/">Home</Nav.Link>
//   </Fragment>
// )
// { alwaysOptions }
const Header = ({ user }) => (
  <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="/">
      [Brain]Notes
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
