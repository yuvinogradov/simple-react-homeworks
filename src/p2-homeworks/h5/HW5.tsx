import React from "react";
import Header from "./Header";
import Routes from "./Routes";
import {HashRouter} from "react-router-dom";
import Navbar from "./Navbar";
import s from './HW5.module.css'

function HW5() {
    return (
        <div className={s.HW5}>
            <HashRouter>
                <Header/>
                <Navbar/>
                <Routes/>
            </HashRouter>
        </div>
    );
}

export default HW5;
