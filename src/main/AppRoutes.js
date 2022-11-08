import React from 'react';

import {Route , BrowserRouter} from 'react-router-dom';

import Login from '../screens/Login/Login';
import CreateUser from '../screens/CreateUser/CreateUser';
import UpdateOwner from '../screens/Owner/UpdateOwner';
import DeleteOwner from '../screens/Owner/DeleteOwner';
import FindOwner from  '../screens/Owner/FindOwner';

function  AppRoutes() {
    return (
        <BrowserRouter>
        <Route component = { Login } path = "/login" /> 
        <Route component = { CreateUser } path = "/createUser" /> 
        <Route component = { UpdateOwner } path = "/updateOwner/:id" /> 
        <Route component = { DeleteOwner } path = "/deleteOwner" /> 
        <Route component = { FindOwner } path = "/findOwner" /> 
        </BrowserRouter>
    )
}

export default AppRoutes;