import  React from "react";

import NavBarItem from "./NavBarItem";
import { AuthConsumer } from '../main/SessionProvider';

function NavBar(props) {
    return (
            <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
                <div className="container">
                    <a href="/" className="navbar-brand">My Car</a>
                    <button className="navbar-toggler" type="button" 
                     data-bs-toggle="collapse" data-bs-target="#navbarResponsive" 
                     aria-controls="navbarResponsive" aria-expanded="false"
                     aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav">
                            <NavBarItem href="/" label="Usuários"/>
                            <NavBarItem render={props.isAuthenticated} href="/findOwner" label="Usuários"/>
                            <NavBarItem render={props.isAuthenticated} href="/login" label="Login"/>
                            <NavBarItem render={props.isAuthenticated} href="/login" onClick={props.logout} label="Sair"/>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default() => (
    <AuthConsumer>
         {(context) => (
         <NavBar isAuthenticated={context.isAuthenticated} logout={context.end} />
         )}
    </AuthConsumer>
)