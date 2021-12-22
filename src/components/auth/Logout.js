import React from 'react';
import {logout} from "../../storeRedux/action";
import {Redirect} from "react-router-dom";
import {LOGIN_ROUTE} from "../../CONST";
import {useDispatch} from "react-redux";
import firebase from "firebase/compat";

function Logout(props) {


    const dispatch = useDispatch()
    const logoutRoute = ()=>{
        firebase.auth().signOut().then(function() {
            console.log("Successfully signed out.")})
        dispatch(logout())
        console.log("Successfully signed out.")
        return(<Redirect to={LOGIN_ROUTE}/>)
    }

    return (
        <div>
            {logoutRoute()}</div>
    );
}

export default Logout;
