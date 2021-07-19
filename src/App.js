import React, {useEffect} from 'react';
import './App.css';
import {Logo} from "./logo/logo";
import {Filter} from "./components/filter/filter";
import {Content} from "./components/content/content";
import content from './components/content/content.module.css';
import {aviasalesApi} from "./api/api";
import {getTicketsThunk} from "./redux/reducers/ticketsReducer";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();

    useEffect(()=> {
        aviasalesApi.getKey();
        dispatch(getTicketsThunk(localStorage.getItem('key')))
    }, [dispatch])
    return (
        <div className={content.main}>
            <Logo/>
            <Filter/>
            <Content/>
        </div>
    );
}

export default App;
