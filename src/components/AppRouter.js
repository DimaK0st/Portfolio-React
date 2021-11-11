import React from 'react';
import {privateRoutes} from "../routes";
import {publicRoutes} from "../routes";
import {CLICKER, GIT_PAGE, HOME, LOGIN_ROUTE} from "../CONST";
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
                <Redirect to={GIT_PAGE}/>
            </Switch>
        )
        :
        (
            <Switch>
                <Route path={GIT_PAGE} exact={true}><MainClicker data={data}/> </Route>
                <Redirect to={GIT_PAGE}/>
            </Switch>
        )
}

export default AppRouter;
