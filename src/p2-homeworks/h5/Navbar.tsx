import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import React, {useState} from "react";
import s from './Navbar.module.css'

// import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from '@material-ui/core';
// import {Menu} from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer';


const Navbar = () => {

    const [hidden, setHidden] = useState(true);

    const clickHandler = () => {
        setHidden(!hidden)
    }

    let navbar = <></>
    if (!hidden) {
        navbar = <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeLink}>PreJunior</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={PATH.JUNIOR} activeClassName={s.activeLink}>Junior</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.activeLink}>JuniorPlus</NavLink>
            </div>
        </nav>
    }

    return (
        <>
            <div>
                <button onClick={() => {
                    clickHandler()
                }}> >>
                </button>
            </div>
            {navbar}


        </>
    )
}

export default Navbar;