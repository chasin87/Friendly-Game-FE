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
import "./index.css";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar
      className="navbar sticky-top"
      // bg="light"
      expand="lg"
      style={{
        background: "#e8491d",
        marginBottom: 30,
        marginTop: 30,
      }}
    >
      <Navbar.Brand as={NavLink} to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: 130,
            marginBottom: -40,
            marginTop: -40,
          }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          <NavbarItem path="/gamelist" linkText="Game List" />

          {token ? (
            <NavbarItem path="/creategame" linkText="Create Game" />
          ) : null}
          {token ? (
            <NavbarItem path="/account" linkText="Account Page" />
          ) : null}
          {loginLogoutControls}
          {!token ? <NavbarItem path="/signup" linkText="SignUp" /> : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
