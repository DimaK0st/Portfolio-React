import React, {useEffect} from 'react';
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

    const dispatch = useDispatch()
    const data= props.data

// ну и подписаться на событие успешной авторизации или потери сессии:
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // успешно авторизован, объект user содержит username и т.п.
            dispatch(setUser(user))
            alert("HI")
        }
    });

    let userAuth = false
    const auth = firebase.auth()
    const fireStore = firebase.firestore()
    const memoizeInnitFirebase= ()=>{

        dispatch(innitFirebase({auth,fireStore}))
    }

    useEffect(( )=>{
        memoizeInnitFirebase()
    },[auth])


    return userAuth ?
        (
            <Switch>
                <Route key={"CHAT"} path={CHAT_ROUTE} exact={true}><Chat data={data.loginRepos}/> </Route>
                <Route key={"CLICKER"} path={GIT_PAGE} exact={true}><MainClicker data={data.clickerRepos}/> </Route>
                <Route key={"LOGOUT_ROUTE"} path={LOGOUT_ROUTE} exact={true}> <Logout/></Route>
                <Redirect to={GIT_PAGE}/>
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
