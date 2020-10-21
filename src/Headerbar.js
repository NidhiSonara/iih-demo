import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { findAllByDisplayValue } from "@testing-library/react";

class Header extends React.Component {
render(){
  return(

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="#">Navbar</a>
  <nav class="collapse navbar-collapse" id="navbarColor02">
    <findAllByDisplayValue class="navbar-nav mr-auto">
        <NavLink to="/#">About us</NavLink>
        <NavLink to="/#">Services</NavLink>
        <NavLink to="/#">Case studies</NavLink>
        <NavLink to="/#">How IT works</NavLink>
        <NavLink to="/#">Blog</NavLink>
    </findAllByDisplayValue>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-secondary my-2 my-sm-0">Contact us</button>
    </form>
  </nav>
</nav>
);
}
}

export default Header;
