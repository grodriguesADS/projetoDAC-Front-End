import  React from "react";

import NavBarItem from "./NavBarItem";

function NavBar(props) {
    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="/" className="nav-brand" ><font color="Black"> My Car</font></a>
            <span className="navbar-toogler-icon"></span>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                      <NavBarItem href="/" label="Home" /> 
                      <NavBarItem href="/createUser" label="Cadastro" /> 
                      <NavBarItem href="/updateOwner/:id" label="Atualizar" /> 
                      <NavBarItem href="/deleteOwner" label="Deletar" /> 
                      <NavBarItem href="/findOwner" label="Procurar" /> 
                      <NavBarItem href="/login" label="Login" /> 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;