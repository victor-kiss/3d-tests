import React from 'react'
import {Navbar,Nav,NavbarBrand} from 'react-bootstrap'

export default function navbar() {
  return (
    <>
        <Navbar expand="lg p-2">
            <NavbarBrand>3D</NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="button">
          </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
            <Nav.Link href="/"  rel="noreferrer">Polaroid</Nav.Link>

            <Nav.Link href="/mars" rel="noreferrer" >Mars</Nav.Link>
            <Nav.Link href="/venus" rel="noreferrer">Venus</Nav.Link>
            <Nav.Link href="/discoball" rel="noreferrer">Discoball</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}
