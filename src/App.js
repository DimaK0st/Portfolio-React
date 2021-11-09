import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import Clicker from "./components/clicker/MainClicker";
import axiosAPI from "./functions/axiosAPI";
import {incrementCurrentValue} from "./storeRedux/action";

function App() {
    const data = useSelector(state => state.repos)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(axiosAPI())
    // }, [dispatch])



    return (

        <div>
            <Clicker data={data}/>


        </div>

    );
}


export default App;
