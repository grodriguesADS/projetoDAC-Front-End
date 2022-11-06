import  React from "react";

import NavBarItem from "./NavBarItem";

function NavBar(props) {
    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="/" className="nav-brand">My Car</a>
                <button className="navbar-toogler" type="button"
                data-toogle = 'collapse' data-target= "#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded = "false"
                aria-label="Toogle navigation">
            <span className="navbar-toogler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                      <NavBarItem href="/" label="Home" /> 
                      <NavBarItem href="/" label="Cadastro" /> 
                      <NavBarItem href="/" label="Lançamentos" /> 
                      <NavBarItem href="/" label="Login" /> 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;