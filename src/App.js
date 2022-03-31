import './App.css';
import {useSelector} from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import MainClicker from "./components/clicker/MainClicker";

function App() {
    const data = useSelector(state => state.repos)

    return (

        <div>

            <Header/>

            <MainClicker data={data}/>

            <Footer/>

        </div>

    );
}


export default App;
