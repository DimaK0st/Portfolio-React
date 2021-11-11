import React from 'react';
import {CLICKER, GIT_PAGE, HOME, LOGIN_ROUTE} from "../CONST";
import {Route,Switch,Redirect} from "react-router-dom";
import MainClicker from "./clicker/MainClicker";

function AppRouter(props) {
    const data= props.data
    const user = false

    return user ?
        (
            <Switch>
                <Route key={"CLICKER"} path={CLICKER} exact={true}><MainClicker data={data}/> </Route>
                <Redirect to={GIT_PAGE}/>
            </Switch>
        )
        :
        (
            <Switch>
                <Route key={"CLICKER"} path={GIT_PAGE} exact={true}><MainClicker data={data}/> </Route>
                <Redirect to={GIT_PAGE}/>
            </Switch>
        )
}

export default AppRouter;
