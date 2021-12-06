import React, {useEffect} from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
import firebase from "firebase/compat";
import {useDispatch} from "react-redux";
import {innitFirebase, setUser} from "../../storeRedux/action";

function Login(props) {
    const dispatch= useDispatch()
    console.log("props", props)

    let userAuth = false
    const auth = firebase.auth()
    const fireStore = firebase.firestore()
    const memoizeInnitFirebase= ()=>{
        dispatch(innitFirebase({auth,fireStore}))
    }


    useEffect(( )=>{
        memoizeInnitFirebase()
    },[auth])


    const login = async ()=> {
        console.log(props.data.loginRepos)
        const provider = new firebase.auth.GoogleAuthProvider()
        const user = await props.data.loginRepos.auth.signInWithPopup(provider)
        dispatch(setUser(user))
    }

    return (
        <Container>
            <Grid container style={{height: window.innerHeight-100 }}
            alignContent={"center"}
            justify={"center"}>
                <Grid style={{width:400, background: "#c4e2cd"}} container alignContent={"center"} direction={"column"}>
                    <Box p={5}>
                        <Button onClick={login} variant={'outlined'} justify={"center"}>
                            Войти с помощью гугл
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login;
