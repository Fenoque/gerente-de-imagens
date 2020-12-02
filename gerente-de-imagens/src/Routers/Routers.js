import React from 'react';
import { Switch, Route } from 'react-router-dom'
import RegistrationPage from '../Screens/Registration-screen/Registration-screen';
import ItemsPage from '../Screens/screem-to-see-items/Screem-to-see-items';
import LoginPage from '../Screens/Login-screen/Login-screen';
import CreationPage from '../Screens/Imagine-creation-screen/Imagine-creation-screen';


const Routers = () => {
  return (
    <div>
        
        <Switch>
            <Route exact path="/">
                <LoginPage/>
            </Route>
            <Route exact path="/Login">
                <LoginPage/>
            </Route>
            <Route exact path="/Registration">
                <RegistrationPage/>
            </Route>
            <Route exact path="/Items">
                <ItemsPage/>
            </Route>
            <Route exact path='/Creation'>
                <CreationPage/>
            </Route>
            <Route>
                
            </Route>
        </Switch>         
    </div>
  );
}
export default Routers;