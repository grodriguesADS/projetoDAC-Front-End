import React from 'react';

import {Route , BrowserRouter, Switch, Redirect} from 'react-router-dom';

import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import CreateUser from '../screens/CreateUser/CreateUser';
import UpdateOwner from '../screens/Owner/UpdateOwner';
import DeleteOwner from '../screens/Owner/DeleteOwner';
import FindOwner from  '../screens/Owner/FindOwner';

import { AuthConsumer } from '../main/SessionProvider';


function RestrictedRoute( { component: Component, show, ...props}){
    return(
        <Route exact {...props} render={(componentProps) =>{
            if(show){
                return(
                    <Component {...componentProps} />
                )
            }else{
                return(
                    <Redirect to={ {pathname: '/login', state :{ from: componentProps.location}}} />
                )
            }
        }} />
    )
}

function  AppRoutes(props) {
    return (
        <BrowserRouter>
        <Switch>
        <Route component={ Home } path="/" exact/> 
        <Route component={Login} path="/login"/>
        <Route component={CreateUser} path="/createUser"/>

        <RestrictedRoute show={props.isAuthenticated} component={UpdateOwner} path="/updateOwner/:id"/>
        <RestrictedRoute show={props.isAuthenticated} component={DeleteOwner} path="/deleteOwner"/>
        <RestrictedRoute show={props.isAuthenticated} component={FindOwner} path="/findOwner"/>
        </Switch>
        </BrowserRouter>
    );
}

export default()=>(
    <AuthConsumer>
        {(context) => (<AppRoutes isAuthenticated={context.isAuthenticated} />)}
    </AuthConsumer>
)