import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";
import React from "react";
import firebase from "firebase/compat";

firebase.initializeApp({
    apiKey: "AIzaSyBbMvgoLXxxG2buSdBxHDoG_RGl4bg1Eik",
    authDomain: "portfolio-reack.firebaseapp.com",
    projectId: "portfolio-reack",
    storageBucket: "portfolio-reack.appspot.com",
    messagingSenderId: "4769673122",
    appId: "1:4769673122:web:b294c90b52728b50a2ccfb",
    measurementId: "G-RVQDYL2Z07"
});

function App() {

    const data = useSelector(state => state)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(axiosAPI())
    // }, [dispatch])


    return (

        <BrowserRouter>

            <Header/>

            <AppRouter data={data}/>

            <Footer/>

        </BrowserRouter>

    );
}


export default App;
