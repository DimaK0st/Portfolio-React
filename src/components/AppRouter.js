import React, {useEffect, useState} from 'react';
import {CHAT_ROUTE, CLICKER, GIT_PAGE, HOME, LOGIN_ROUTE, LOGOUT_ROUTE} from "../CONST";
import {Route,Switch,Redirect} from "react-router-dom";
import MainClicker from "./clicker/MainClicker";
import Chat from "./chat/Chat";
import Login from "./auth/Login";

import firebase from "firebase/compat";
import {useDispatch} from "react-redux";
import {innitFirebase, logout, setUser} from "../storeRedux/action";
import Logout from "./auth/Logout";
import persistor from "../storeRedux/store";
import {useAuthState} from "react-firebase-hooks/auth";

firebase.initializeApp({
    apiKey: "AIzaSyBbMvgoLXxxG2buSdBxHDoG_RGl4bg1Eik",
    authDomain: "portfolio-reack.firebaseapp.com",
    projectId: "portfolio-reack",
    storageBucket: "portfolio-reack.appspot.com",
    messagingSenderId: "4769673122",
    appId: "1:4769673122:web:b294c90b52728b50a2ccfb",
    measurementId: "G-RVQDYL2Z07"
});


function AppRouter(props) {
    const [userLogged, setUserLogged] = useState(false);
    const dispatch = useDispatch()
    const data= props.data
    let userAuth;

    firebase.auth().onAuthStateChanged(userAuth=(user) =>{
        setUserLogged(user ? true : false);
        }
    );


    return userLogged ?
        (
            <Switch>
                <Route key={"CHAT"} path={CHAT_ROUTE} exact={true}><Chat data={data.loginRepos}/> </Route>
                <Route key={"CLICKER"} path={CLICKER} exact={true}><MainClicker data={data.clickerRepos}/> </Route>
                <Route key={"LOGOUT_ROUTE"} path={LOGOUT_ROUTE} exact={true}> <Logout/></Route>
                <Redirect to={CLICKER}/>
            </Switch>
        )
        :
        (
            <Switch>
                <Route key={"CLICKER"} path={LOGIN_ROUTE} exact={true}><Login data={data}/> </Route>
                <Redirect to={LOGIN_ROUTE}/>
            </Switch>
        )
}

export default AppRouter;
