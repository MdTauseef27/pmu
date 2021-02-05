import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavLink,
  NavDropdown,
  Dropdown,
  NavItem,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GuestLoginPage } from "../LoginPages/GuestLoginPage";
import { StudentLoginPage } from "../LoginPages/StudentLoginPage";
import { ParentLoginPage } from "../LoginPages/ParentLoginPage";
import { Home } from "../Home/Home";
import logo from "../Images/logo.png";
export const MyNavBar = () => {
  return (
    <div>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="#home">
          <i>PMU </i>
          <img src={logo} style={{ width: 60, marginTop: -10 }} />
        </Navbar.Brand>

        <Nav>
          <Nav.Link href="/">Home</Nav.Link>

          <Nav.Link href="#">Study at PMU</Nav.Link>

          <NavDropdown title="Acadmics" id="collasible-nav-dropdown">
            <NavDropdown.Item>UG Courses</NavDropdown.Item>
            <NavDropdown.Item>PG Courses</NavDropdown.Item>
            <NavDropdown.Item>Diploma Courses</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>COLLEGE OF LAW</NavDropdown.Item>
            <NavDropdown.Item>
              COLLEGE OF ARCHITECTURE AND DESIGN
            </NavDropdown.Item>
            <NavDropdown.Item>
              COLLEGE OF SCIENCES & HUMAN STUDIES
            </NavDropdown.Item>
            <NavDropdown.Item>PREPARATORY PROGRAM</NavDropdown.Item>
          </NavDropdown>

          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Sign In</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/Student">Student </Dropdown.Item>
              <Dropdown.Item href="/Parent">Parent</Dropdown.Item>

              <Dropdown.Item href="/Guest">Guest</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="/Aboutus">About US</Nav.Link>
        </Nav>
      </Navbar>

      <Router>
        <Switch>
          <Route path="/Student">
            <StudentLoginPage />
          </Route>
          <Route path="/Parent">
            <ParentLoginPage />
          </Route>
          <Route path="/Guest">
            <GuestLoginPage />
          </Route>
          {/* <Route path="/Aboutus">
            <Aboutus />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
