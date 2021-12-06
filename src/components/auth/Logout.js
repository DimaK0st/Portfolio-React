import React from 'react';
import {logout} from "../../storeRedux/action";
import {Redirect} from "react-router-dom";
import {LOGIN_ROUTE} from "../../CONST";
import {useDispatch} from "react-redux";

function Logout(props) {



    const dispatch = useDispatch()
    const logoutRoute = ()=>{
        dispatch(logout())
        return(<Redirect to={LOGIN_ROUTE}/>)
    }

    return (
        <div>
            привет го в майн
            {logoutRoute()}</div>
    );
}

export default Logout;
