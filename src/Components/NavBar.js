import React from 'react'

import {NavLink} from 'react-router-dom'

function NavBar(){
    return(
        <>
<nav className="navbar navbar-expand-md bg-dark navbar-dark">
  
  <NavLink className="navbar-brand" to="/">Navbar</NavLink>

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/color">Color Picker</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/database">Student Database</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/stockDatabase">Inventory Database</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/mysearch">Search Bar</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/time">Time</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/welcome">Welcome</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/colorapp">Color App</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contacts</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/contactapp">Contact App</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/countryapp">Country App</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/weatherapp">Weather App</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/newweather">New Weather App</NavLink>
      </li>

    </ul>
  </div>
</nav>


        </>
    )
}

export default NavBar