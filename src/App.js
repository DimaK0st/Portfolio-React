import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";
import React from "react";

function App() {
    const data = useSelector(state => state.repos)
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
