import React from 'react';
import {privateRoutes} from "../routes";
import {publicRoutes} from "../routes";
import {CLICKER, HOME, LOGIN_ROUTE} from "../CONST";
import {Route,Switch,Redirect} from "react-router-dom";
import Login from "./auth/Login";
import MainClicker from "./clicker/MainClicker";

function AppRouter(props) {
    const data= props.data
    const user = false

    return user ?
        (
            <Switch>
                <Route path={CLICKER} exact={true}><MainClicker data={data}/> </Route>
                <Redirect to={HOME}/>
            </Switch>
        )
        :
        (
            <Switch>
                <Route path={HOME} exact={true}><MainClicker data={data}/> </Route>
                <Redirect to={HOME}/>
            </Switch>
        )
}

export default AppRouter;
