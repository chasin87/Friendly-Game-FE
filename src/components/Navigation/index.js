import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import Logo from "../../images/logo.png";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        <img src={Logo} alt="logo" style={{ width: 130, marginBottom: -70 }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/creategame" linkText="Create Game" />{" "}
          {/*Created to
          see the page this needs to removed on final version */}
          {token ? (
            <NavbarItem path="/creategame" linkText="Create Game" />
          ) : null}
          {loginLogoutControls}
          <NavbarItem path="/signup" linkText="SignUp" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
