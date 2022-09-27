import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>
    <NavLink to="/" exact style={{color:"black" ,border:"2px solid grey",textDecoration:"none",
    margin:"5px",padding:"5px",borderRadius:"2vh"}}activeStyle={{background:"darkgrey"}}>Home</NavLink>
    <NavLink to="/movies" exact style={{color:"black" ,border:"2px solid grey",textDecoration:"none",
    margin:"5px",padding:"5px",borderRadius:"2vh"}}activeStyle={{background:"darkgrey"}}>Movies</NavLink>
    <NavLink to="/directors" exact style={{color:"black" ,border:"2px solid grey",textDecoration:"none",margin:"5px",padding:"5px",borderRadius:"2vh"}}activeStyle={{background:"darkgrey"}}>Directors</NavLink>
    <NavLink to="/actors" exact style={{color:"black" ,border:"2px solid grey",textDecoration:"none",margin:"5px",padding:"5px",borderRadius:"2vh"}}activeStyle={{background:"darkgrey"}}>Actors</NavLink>

  </div>;
}

export default NavBar;
